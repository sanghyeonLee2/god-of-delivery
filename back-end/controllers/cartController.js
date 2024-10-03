const Cart = require('./models/cart');

exports.postAddCart = async (req, res) => {
    const date = new Date();
    try {
        await Cart.create({
            userId : req.body.userId,
            storeId : req.body.storeId,
            menuId : req.body.menuId,
            menuOptionId : req.body.menuOptionId,
            orderId:req.body.orderId,
            quantity : req.body.quantity,
            createDate: date,
            modifiedDate: date,
            status : req.body.status,
        });
        res.status(201).send({
            status: 201,
            message: 'Success'
        })
    }
    catch (err){
        res.status(500).send({
            status: 500,
            message: err
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