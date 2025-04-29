const {
  Store,
  Order,
  OrderItem,
  OrderItemOption,
  Review,
  Menu,
  MenuOption,
  CartItemOption,
  CartItem,
  Cart,
} = require("../models");
const CartService = require("./cart.service");
const { sequelize } = require("../models");
const { Op } = require("sequelize");

exports.createOrder = async ({ userId, body }) => {
  const t = await sequelize.transaction();

  try {
    const cartData = await CartService.findCartDataByUserId(userId);

    const newOrder = await Order.create(
      {
        paymentMethod: body.paymentMethod,
        totalPrice: 0,
        requests: body.requests,
        addressSnapshot: body.address,
        type: body.orderType,
        userId,
        storeId: cartData.storeId,
        detailAddress: body.detailAddress,
        contact: body.contact,
      },
      { transaction: t },
    );

    const menuIds = cartData.CartItems.map((item) => item.menuId);
    const allMenuOptions = cartData.CartItems.flatMap((item) =>
      item.CartItemOptions.map((option) => option.menuOptionId),
    );

    const menus = await Menu.findAll({
      where: { menuId: menuIds },
      transaction: t,
    });

    const menuOptions =
      allMenuOptions.length > 0
        ? await MenuOption.findAll({
            where: { menuOptionId: allMenuOptions },
            transaction: t,
          })
        : [];

    const menuMap = new Map(menus.map((menu) => [menu.menuId, menu]));
    const optionMap = new Map(
      menuOptions.map((option) => [option.menuOptionId, option]),
    );

    let orderTotal = 0;

    for (const cartItem of cartData.CartItems) {
      const menuInfo = menuMap.get(cartItem.menuId);

      const orderItem = await OrderItem.create(
        {
          orderId: newOrder.orderId,
          menuId: cartItem.menuId,
          menuNameSnapshot: menuInfo.name,
          menuPriceSnapshot: menuInfo.price,
          quantity: cartItem.quantity,
        },
        { transaction: t },
      );

      let optionSum = 0;

      for (const cartOption of cartItem.CartItemOptions) {
        const optionInfo = optionMap.get(cartOption.menuOptionId);

        await OrderItemOption.create(
          {
            orderItemId: orderItem.orderItemId,
            menuOptionId: cartOption.menuOptionId,
            optionNameSnapshot: optionInfo.content,
            optionPriceSnapshot: optionInfo.price,
          },
          { transaction: t },
        );

        optionSum += optionInfo.price;
      }

      const menuTotal = cartItem.quantity * (menuInfo.price + optionSum);
      orderTotal += menuTotal;
    }

    await newOrder.update(
      {
        totalPrice: orderTotal,
      },
      { transaction: t },
    );

    if (cartData) {
      const cartId = cartData.cartId;

      const cartItems = await CartItem.findAll({
        where: { cartId },
        attributes: ["cartItemId"],
        transaction: t,
      });

      const cartItemIds = cartItems.map((item) => item.cartItemId);

      if (cartItemIds.length > 0) {
        await CartItemOption.destroy({
          where: { cartItemId: cartItemIds },
          transaction: t,
        });
      }

      await CartItem.destroy({
        where: { cartId },
        transaction: t,
      });

      await Cart.destroy({
        where: { cartId },
        transaction: t,
      });
    }

    await t.commit();

    return newOrder;
  } catch (error) {
    console.log(error);
    await t.rollback();
    throw error;
  }
};

exports.findOrderByOrderId = async ({ orderId }) => {
  const orderData = await Order.findOne({
    where: { orderId },
    include: [
      { model: Store, attributes: ["storeName", "deliveryTip"] },
      { model: OrderItem, include: [{ model: OrderItemOption }] },
    ],
  });
  return {
    userPaymentInfo: {
      orderType: orderData.type,
      paymentMethod: orderData.paymentMethod,
      detailAddressSnapshot: orderData.detailAddress,
      contact: orderData.contact,
      requests: orderData.requests,
      addressSnapshot: orderData.addressSnapshot,
    },
    orderId: orderData.orderId,
    createdAt: orderData.createdAt,
    status: orderData.status,
    storeId: orderData.storeId,
    storeName: orderData.Store.storeName,
    tips: orderData.Store.deliveryTip,
    userId: orderData.userId,
    totalPrice: orderData.totalPrice,
    orderItems: orderData.OrderItems,
  };
};

exports.findUserOrder = async ({ userId }, { page }) => {
  const pageNum = Number(page);

  const { count, rows: orders } = await Order.findAndCountAll({
    where: { userId },
    offset: (pageNum - 1) * 10,
    limit: 10,
    order: [["status", "ASC"]],
    include: [
      { model: Store, attributes: ["storeLogoImage"] },
      { model: OrderItem },
    ],
  });

  const hasReview = await Review.findAll({
    where: { userId },
    attributes: ["orderId"],
  });

  const hasReviewOrderId = hasReview.reduce((acc, item) => {
    acc.push(item.orderId);
    return acc;
  }, []);

  const formattedOrders = orders.map((order) => {
    const orderData = order.get({ plain: true });
    const imgUrl = orderData.Store ? orderData.Store.storeLogoImage : null;

    if (!order.OrderItems || order.OrderItems.length === 0) {
      return {
        ...orderData,
        representativeOrder: "메뉴없음",
        hasReviewed: hasReviewOrderId.includes(order.orderId),
        imgUrl,
      };
    }

    const sortedMenu = order.OrderItems.sort(
      (a, b) => b.menuPriceSnapshot - a.menuPriceSnapshot,
    );

    const representativeMessage =
      sortedMenu.length - 1
        ? `${sortedMenu[0].menuNameSnapshot} 외 ${sortedMenu.length - 1}개`
        : sortedMenu[0].menuNameSnapshot;

    const { OrderItems, Store, ...withOutOrderItem } = orderData;

    return {
      ...withOutOrderItem,
      representativeOrder: representativeMessage,
      hasReviewed: hasReviewOrderId.includes(order.orderId),
      imgUrl,
    };
  });

  return {
    totalItems: count,
    userOrderList: formattedOrders,
  };
};

exports.orderCntInThreeMonth = async (storeId) => {
  const threeMonthAgo = new Date();
  threeMonthAgo.setDate(threeMonthAgo.getMonth() - 3);
  const orderCnt = await Order.count({
    where: { storeId, createdAt: { [Op.gte]: threeMonthAgo } },
  });
  return orderCnt;
};
