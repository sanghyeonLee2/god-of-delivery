const Store = require('../models/store');
const {Op} = require('sequelize');

exports.getStores = async (latitude, longitude, pages) => {
    await Store.findAll({
        where: {
            address: {
                [Op.and]: [
                    {[Op.startsWith]: req.params.city},
                    {[Op.substring]: req.params.district}
                ]
            },
            category: {[Op.substring]: req.params.category}
        },
    })
}

exports.createStore = async (storeInfo) => {
    return await Store.create({
        storeId: storeInfo.storeId,
        storeName: storeInfo.storeName,
        storeType: storeInfo.storeType,
        storeCategory: storeInfo.storeCategory,
        storeAddress: storeInfo.storeAddress,
        storePicture: storeInfo.storePicture,
        storePhone: storeInfo.storePhone,
        minDeliveryPrice: storeInfo.minDeliveryPrice,
        deliveryTip: storeInfo.deliveryTip,
        minDeliveryTime: storeInfo.minDeliveryTime,
        maxDeliveryTime: storeInfo.maxDeliveryTime,
        operationHours: storeInfo.operationHours,
        deliveryAddress: storeInfo.deliveryAddress,
    })
}