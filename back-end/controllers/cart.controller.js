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

exports.getCartData = async (req, res) => {
    try{
        const cartData = await CartService.findCartDataByUserId(req.userId)
        res.status(200).send(cartData);
    }
    catch (err){
        res.status(500).send({
            status: 500,
            message: err.message
        })
    }
}