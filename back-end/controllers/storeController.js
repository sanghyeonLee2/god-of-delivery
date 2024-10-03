const Store = require('../models/store');
const {Op} = require('sequelize');

/**
 * Type에 맞는 store 출력 함수
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.getStores = async (req, res) => {
    try {
        const stores = await Store.findAll({
            where: {
                address: {
                    [Op.and]:[
                        {[Op.startsWith]:req.params.city},
                        {[Op.substring]: req.params.district}
                    ]
                },
                category: {[Op.substring]:req.params.category}
            },
        })
        if (stores === null || stores.length === 0) {
            res.status(401).send({
                status: 401,
                message: "Not Found"
            });
        } else {
            res.status(200).send({
                status: 200,
                data: stores
            })
        }
    } catch (err) {
        res.status(500).send({
            status: 500,
            message: err.message
        })
    }
}

exports.postCreateStore = async (req, res) => {
    const date = new Date();
    try {
        const store = await Store.create({
            storeId: req.body.storeId,
            name:req.body.name,
            type:req.body.type,
            category:req.body.category,
            address:req.body.address,
            storePictureUrl:req.body.storePictureUrl,
            phone:req.body.phone,
            content:req.body.content,
            minDeliveryPrice:req.body.minDeliveryPrice,
            deliveryTip:req.body.deliveryTip,
            minDeliveryTime:req.body.minDeliveryTime,
            maxDeliveryTime:req.body.maxDeliveryTime,
            operationHours:req.body.operationHours,
            closedDays:req.body.closedDays,
            deliveryAddress:req.body.deliveryAddress,
            createdDate:date,
            modifiedDate:date,
        })
        res.status(201).send({
            status: 201,
            data: store
        })
    }
    catch (err) {
        res.status(500).send({
            status: 500,
            message: err.message
        })
    }
}

