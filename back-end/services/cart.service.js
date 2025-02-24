const {Store, Cart, CartItem, CartItemOption} = require('../models');
const {Sequelize} = require("sequelize");

exports.addCart = async (userId, {storeId, quantity, options, menuId}) => {
    let cart = await Cart.findOne({
        where: {userId},
    },)
    if (cart) {
        if (cart.storeId !== storeId) {
            throw new Error("한 장바구니에는 한 가게의 상품만 담을 수 있습니다.")
        }
    }
    else {
        cart = await Cart.create({
            storeId: storeId,
            userId: userId
        })
    }
    const isExistItems = await CartItem.findAll({
        where:{
            cartId:cart.cartId, menuId},
        include:[{
            model:CartItemOption,
            required:false,
        }]
    })

    const sortOptionId = options.sort()

    const isSameOption = (existOptions, newOptions) => {
        if (existOptions.length !== newOptions.length){
            return false;
        }
        return existOptions.every((val, idx) => val === newOptions[idx])
    }

    let matchedItem = null
    for (const items of isExistItems) {
        const existOptions = items.CartItemOptions
            .map((option) => option.menuOptionId)
            .sort()
        if(isSameOption(existOptions, sortOptionId)){
            matchedItem = items
            break;
        }
    }
    console.log(matchedItem)
    if(matchedItem){
        matchedItem.quantity += quantity
        await matchedItem.save()
        return matchedItem
    }

    const newCartItem = await CartItem.create({
        quantity: quantity,
        menuId: menuId,
        cartId: cart.cartId
    })
    const cartItemCreateData = options.map(optionId => ({
        cartItemId: newCartItem.cartItemId,
        menuOptionId: optionId
    }))
    const newCartItemOption = await CartItemOption.bulkCreate(cartItemCreateData)
    return ({newCartItem,
    CartItemOptions : newCartItemOption,})
}

exports.findCartDataByUserId = async (userId) => {
    const myCartData = await Cart.findOne({
        where: {userId},
        include: [
            {
                model: Store,
                attributes: ['storeId', 'storeName', 'deliveryTime']
            },
            {
                model: CartItem,
                include:[
                    {
                        model: CartItemOption
                    }
                    ]
            }
            ]})
    return (myCartData)
}