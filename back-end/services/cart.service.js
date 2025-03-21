const { Store, Cart, CartItem, CartItemOption, Menu } = require("../models");

exports.addCart = async (userId, { storeId, quantity, options, menuId }) => {
  let cart = await Cart.findOne({
    where: { userId },
  });
  if (cart) {
    if (cart.storeId !== storeId) {
      throw new Error("한 장바구니에는 한 가게의 상품만 담을 수 있습니다.");
    }
  } else {
    cart = await Cart.create({
      storeId: storeId,
      userId: userId,
    });
  }
  const isExistItems = await CartItem.findAll({
    where: {
      cartId: cart.cartId,
      menuId,
    },
    include: [
      {
        model: CartItemOption,
        required: false,
      },
    ],
  });

  const sortOptionId = options.sort();

  const isSameOption = (existOptions, newOptions) => {
    if (existOptions.length !== newOptions.length) {
      return false;
    }
    return existOptions.every((val, idx) => val === newOptions[idx]);
  };

  let matchedItem = null;
  for (const items of isExistItems) {
    const existOptions = items.CartItemOptions.map(
      (option) => option.menuOptionId,
    ).sort();
    if (isSameOption(existOptions, sortOptionId)) {
      matchedItem = items;
      break;
    }
  }
  if (matchedItem) {
    matchedItem.quantity += quantity;
    await matchedItem.save();
    return matchedItem;
  }

  const newCartItem = await CartItem.create({
    quantity: quantity,
    menuId: menuId,
    cartId: cart.cartId,
  });
  const cartItemCreateData = options.map((optionId) => ({
    cartItemId: newCartItem.cartItemId,
    menuOptionId: optionId,
  }));
  const newCartItemOption = await CartItemOption.bulkCreate(cartItemCreateData);
  return {
    newCartItem,
    ...newCartItemOption,
  };
};

exports.findCartDataByUserId = async (userId) => {
  const myCartData = await Cart.findOne({
    where: { userId },
    include: [
      {
        model: Store,
        attributes: ["storeId", "storeName", "deliveryTime", "deliveryTip"],
      },
      {
        model: CartItem,
        include: [
          { model: Menu, attributes: ["name", "price", "description"] },

          {
            model: CartItemOption,
          },
        ],
      },
    ],
  });

  return myCartData;
};

exports.destroyCart = async ({ cartId }) => {
  const deleteData = await Cart.destroy({
    where: { cartId },
  });
  return deleteData;
};

exports.destroyCartItem = async ({ userId }, { cartItemId }) => {
  const deleteItem = await CartItem.destroy({
    where: { cartItemId },
  });
  const cart = await Cart.findOne({ where: { userId } });
  const isExistItem = await CartItem.count({ where: { cartId: cart.cartId } });
  if (!isExistItem) {
    await Cart.destroy({ where: { cartId: cart.cartId } });
  }
  return deleteItem;
};

exports.updateCartItemOption = async (
  { cartItemId },
  { quantity, options },
) => {
  await CartItem.update(
    {
      quantity: quantity,
    },
    { where: { cartItemId } },
  );
  const cartOptionUpdate = await CartItem.findOne({
    where: { cartItemId },
    include: [
      {
        model: CartItemOption,
      },
    ],
  });
  const sortOptionId = options.sort();

  const isSameOption = (existOptions, newOptions) => {
    if (existOptions.length !== newOptions.length) {
      return false;
    }
    return existOptions.every((val, idx) => val === newOptions[idx]);
  };
  const existOptions = cartOptionUpdate.CartItemOptions.map(
    (option) => option.menuOptionId,
  ).sort();
  if (isSameOption(existOptions, sortOptionId)) {
    throw new Error("옵션 변경 점이 없습니다.");
  }
  await CartItemOption.destroy({
    where: { cartItemId },
  });
  const cartItemCreateData = options.map((optionId) => ({
    cartItemId,
    menuOptionId: optionId,
  }));
  const updateOptions = await CartItemOption.bulkCreate(cartItemCreateData);
  return updateOptions;
};
