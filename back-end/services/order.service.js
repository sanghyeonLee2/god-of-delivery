const {Order, OrderItem, OrderItemOption, Cart, CartItem, CartItemOption} = require('../models')
const CartService = require('./cart.service');
const UserService = require('./user.service');

exports.createOrder = async({userId, body},) => {
    const cartData = await CartService.findCartDataByUserId(userId)
    const newOrder = await Order.create({
        paymentMethod: body.paymentMethod,
        payment_method: 'CARD',
        total_price: 0, // 초기 0, 나중에 합산
        requests: body.requests,
        status: body.status,
        address: body.address,
        type: body.orderType
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

            const newOrderItemOption = await OrderItemOpton.create({
                order_item_id: orderItem.order_item_id,
                menu_option_id: cartOption.menuOptionId,
                option_name_snapshot: optionInfo.name,
                option_price_snapshot: optionInfo.price
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