const {Store,Order, OrderItem, OrderItemOption, Cart, CartItem, CartItemOption, Menu, MenuOption} = require('../models')
const CartService = require('./cart.service');
const UserService = require('./user.service');

exports.createOrder = async({userId, body},) => {
    const cartData = await CartService.findCartDataByUserId(userId)
    const newOrder = await Order.create({
        paymentMethod: body.paymentMethod,
        totalPrice: 0, // 초기 0, 나중에 합산
        requests: body.requests,
        status: body.status,
        addressSnapshot: body.address,
        type: body.orderType,
        userId,
        storeId: cartData.storeId
    })

    let orderTotal = 0

    for (const cartItem of cartData.CartItems){
        const menuInfo = await Menu.findOne({where:{menuId:cartItem.menuId}})
        const orderItem = await OrderItem.create({
            orderId: newOrder.orderId,
            menuId: cartItem.menuId,
            menuNameSnapshot: menuInfo.name,
            menuPriceSnapshot: menuInfo.price,
            quantity: cartItem.quantity,
        })

        let optionSum = 0

        for (const cartOption of cartItem.CartItemOptions){
            const optionInfo = await MenuOption.findOne({
                where:{menuOptionId:cartOption.menuOptionId}
            })
            const newOrderItemOption = await OrderItemOption.create({
                orderItemId: orderItem.orderItemId,
                menuOptionId: cartOption.menuOptionId,
                optionNameSnapshot: optionInfo.content,
                optionPriceSnapshot: optionInfo.price
            })

            optionSum += optionInfo.price
        }

        const menuTotal = cartItem.quantity * (menuInfo.price + optionSum)
        orderTotal += menuTotal
    }

    await newOrder.update({
        totalPrice: orderTotal,
    })

    return (newOrder)
}

exports.findOrderByOrderId = async ({orderId}) => {
    const orderData = await Order.findOne(
        {where:{orderId},
            include: [
                {model: Store,
                    attributes: ['storeName', 'latitude','longitude']
                },
                {model: OrderItem,
                include: [{model: OrderItemOption}]}]
        })
    return (orderData)
}