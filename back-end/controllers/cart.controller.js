const CartService = require('../services/cart.service');

exports.postAddCart = async (req, res) => {
    try {
        const isSuccess = await CartService.addCart(req.userId, req.body);
            res.status(200).send({
                message: 'Success',
                data:isSuccess
            })

    }
    catch (err){
        res.status(500).send({
            status: 500,
            message: err.message
        })
    }
}

exports.getCartList = async (req, res) => {
    const isWhoCart = await Cart.findAll({
    where:{
        userId:req.params.userId,
        storeId : req.body.storeId,
    },
        attributes:["userId","storeId","menuId","menuOptionId","orderId","quantity","status"]
    })

}