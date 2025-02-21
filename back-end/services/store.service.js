const Store = require('../models/store');
const Menu = require('../models/menu');
const {Op, Sequelize} = require('sequelize');

exports.getStores = async (lat, lng, page, limit, category) => {
    const limitNum = Number(limit);
    const pageNum = Number(page);
    const data = await Store.findAll({
        where: {category: category},
        limit: limitNum,
        offset: (pageNum - 1) * limitNum,
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
        totalItems: data.length,
        currentPage: `${pageNum} / ${Math.ceil(data.length / limitNum)}`,
        data: data
    }
}

exports.createStore = async (storeData) => {
    return await Store.create(storeData)
}

exports.findStoreById = async ({storeId}) => await Store.findOne({
    where: {storeId: storeId},
});
exports.findStoreInfo = async ({storeId}) => {
    const storeData = await Store.findOne({
        where: {storeId: storeId},
        include: [{
            model: Menu
        }]
    })
    const menuData = Object.values(storeData.Menus.reduce((acc, item) => {
        const key = item.category

        if(!acc[key]){
            acc[key] = {title: key, menu:[]}
        }
        acc[key].menu.push(item)

        return acc
    },{})
    )
    return processingData = {
        storeId: storeData.storeId,
        notice: storeData.notice,
        deliveryMethod: {
            order: {
                minPrice: storeData.minDeliveryPrice,
                paymentMethod: storeData.deliveryPayment,
                deliveryTime: storeData.deliveryTime,
                tips: storeData.deliveryTip,
            },
            takeout: {
                discount: storeData.takeoutDiscount,
                minPrice: storeData.takeoutMinPrice,
                pickUpTime: storeData.takeoutPickupTime,
                paymentMethod: storeData.takeoutPayment,
            }
        },
        storeData: {
            businessAddress: storeData.storeAddress,
            ownerName: storeData.owner,
            tradeName: storeData.storeName,
            storeName: storeData.storeName,
            origin: storeData.origin,
            businessNum: storeData.businessNum,
            hours: storeData.operationHour,
            tipsInfo: storeData.deliveryTipsInfo,
            dayOff: storeData.dayOff,
            phoneNumber: storeData.storeNumber,
            area: storeData.area,
            currentOrder: "리뷰 테이블 조사해서",
            allReview: "리뷰 테이블 조사해서",
            dips: "찜 테이블 조사해서",
            introduction: storeData.introduction,
        },
        storeHeader: {
            currentReview: "리뷰 테이블 조사해서",
            currentOwnerReview: "리뷰 테이블 조사해서",
            storeName: storeData.storeName,
            rating: "리뷰 테이블 조사해서"
        },
        menuInfo: menuData,
    }
}
