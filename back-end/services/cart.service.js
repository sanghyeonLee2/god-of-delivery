const { Store, Cart, CartItem, CartItemOption, Menu, MenuCategory, MenuOption, sequelize } = require("../models");

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
    attributes: ["cartId", "storeId", "userId"], // Cart 테이블의 필요한 컬럼만 선택
    include: [
      {
        model: Store,
        attributes: ["storeId", "storeName", "deliveryTime", "deliveryTip"],
      },
      {
        model: CartItem,
        attributes: ["cartItemId", "quantity", "cartId", "menuId"], // CartItem 테이블의 필요한 컬럼 선택
        include: [
          {
            model: Menu,
            attributes: ["name", "price", "description"], // Menu 테이블의 필요한 속성
          },
          {
            model: CartItemOption,
            attributes: ["cartItemOptionId", "cartItemId"], // CartItemOption의 필요한 속성
            include: [
              {
                model: MenuOption,
                attributes: ["menuOptionId", "content", "price", "menuCategoryId"], // MenuOption의 필요한 속성
              },
            ],
          },
        ],
      },
    ],
  });

  if (!myCartData) return null;

  // ✅ 데이터 변환: attributes와 map을 활용하여 원하는 형태로 가공
  const formattedCartData = {
    ...myCartData.get(), // Sequelize 객체에서 JSON 변환
    CartItems: myCartData.CartItems.map((cartItem) => ({
      ...cartItem.get(),
      name: cartItem.Menu?.name || null, // Menu 데이터를 평탄화
      price: cartItem.Menu?.price || null,
      description: cartItem.Menu?.description || null,
      Menu: undefined, // 기존 Menu 객체 제거
      CartItemOptions: cartItem.CartItemOptions.map((option) => ({
        ...option.get(),
        menuOptionId: option.MenuOption?.menuOptionId || null,
        content: option.MenuOption?.content || null,
        price: option.MenuOption?.price || null,
        createdAt: option.MenuOption?.createdAt || null,
        updatedAt: option.MenuOption?.updatedAt || null,
        menuCategoryId: option.MenuOption?.menuCategoryId || null,
        MenuOption: undefined, // 기존 MenuOption 객체 제거
      })),
    })),
  };

  return formattedCartData;
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
      quantity,options
    },
    { where: { cartItemId } },
  );
  const cartItemCreateData = options.map((optionId) => ({
    cartItemId,
    menuOptionId: optionId,
  }));
  const updateOptions = await CartItemOption.bulkCreate(cartItemCreateData);
  return updateOptions;
};

exports.findMenuDetail = async ({ menuId }) => {
    const t = await sequelize.transaction();
    try{
      const cartItem = await CartItem.findOne({where: {menuId}, include:[{model:CartItemOption}], transaction: t})
      const selectedOptionIds = cartItem.CartItemOptions.reduce((acc, item) => {
        acc.push(item.menuOptionId)
        return acc
      },[])
      const menuData = await Menu.findOne({where:{menuId},include:[{model:MenuCategory, include:[{model:MenuOption}]}], transaction: t})
      const plainMenuData = menuData.get({plain:true})
      plainMenuData.MenuCategories.forEach(category => {
        category.MenuOptions.forEach(option => {
          if (selectedOptionIds.includes(option.menuOptionId)) {
            option.hasMenu = true;
          }
        });
      });
      return plainMenuData
    }
    catch(err){
      await t.rollback();
      throw err;
    }
}