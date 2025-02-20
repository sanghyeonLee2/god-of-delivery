const Store = require('../models/store');
const {Op} = require('sequelize');

exports.getStores = async (lat, lng, page, limit, category) => {
    const {count, rows} = await Store.findAll({
        where: {category: category},
        limit: limit,
        offset: (page - 1) * limit,
        attributes: [
            '*',  // 모든 컬럼 조회
            [Sequelize.literal(
                `(6371 * acos(cos(radians(${lat})) * cos(radians(latitude)) 
                * cos(radians(longitude) - radians(${lng})) 
                + sin(radians(${lat})) * sin(radians(latitude))))`
            ), 'distance'] // 거리 계산
        ],
        having: Sequelize.literal('distance <= 5'),  // 5km 이내 필터링
        order: Sequelize.literal('distance ASC'),  // 가까운 순 정렬
    });
    return {
        category: category,
        totalItems: count,
        currentPage: `${page} / ${Math.ceil(count / limit)}`,
        data: rows
    }
}

exports.createStore = async (storeData) => {
    return await Store.create(storeData)
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