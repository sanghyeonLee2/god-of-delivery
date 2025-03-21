const Store = require('../models/store');
const Menu = require('../models/menu');
const OrderService = require('../services/order.service');
const ReviewService = require('../services/review.service');
const DibService = require('../services/dib.service');
const {Op, Sequelize} = require('sequelize');
const {findCategory} = require('../config/category')
const {findSorting} = require('../config/sorting')

exports.getStores = async (lat, lng, {category}, {page, sorting, keyword}) => {
    const pageNum = Number(page);
    let sortType
    switch (findSorting(sorting)) {
        case "ratingDesc":
            sortType = [['rating', 'DESC']]; // 별점 높은 순
            break;
        case "reviewCntDesc":
            sortType = [['reviewCnt', 'Desc']];
            break;
        case "minDeliveryPriceAsc":
            sortType=[['minDeliveryPrice', 'DESC']];
            break;
        default:
            sortType = [Sequelize.literal('distance ASC')]; // 기본: 가까운 순
            break;
    }
    const whereCondition = {
        ...(category !== "all" ? { storeCategory: findCategory(category) } : {}), // 카테고리 필터 적용
        ...(keyword ? { storeName: { [Op.like]: `%${keyword}%` } } : {}) // 키워드 검색 추가
    };

    const data = await Store.findAll({
        where: whereCondition,
        limit: 10,
        offset: (pageNum - 1) * 10,
        attributes: [
            'storeId',
            'storeName',
            'storeCategory',
            'storeLogoImage',
            'operationHour',
            'rating',
            'reviewCnt',
            'minDeliveryPrice',
            [Sequelize.literal(
            `(6371 * acos(cos(radians(${lat})) * cos(radians(latitude)) 
                * cos(radians(longitude) - radians(${lng})) 
                + sin(radians(${lat})) * sin(radians(latitude))))`
        ), 'distance']
        ], // 거리 계산
        having: Sequelize.literal('distance <= 5'),  // 5km 이내 필터링
        order: sortType,
    });
    return {
        category: category,
        totalItems: data.length,
        storeList: data
    }
}

exports.createStore = async (storeData) => {
    return await Store.create(storeData)
}

exports.findStoreById = async ({storeId}) => await Store.findOne({
    where: {storeId: storeId},
});
exports.findStoreInfo = async ({storeId},{userId}) => {
    const storeData = await Store.findOne({
        where: {storeId},
        include: [{
            model: Menu
        }]
    })
    const menuData = Object.values(storeData.Menus.reduce((acc, item) => {
        const key = item.category

        if(!acc[key]){
            acc[key] = {title: key, menus:[]}
        }
        acc[key].menus.push(item)

        return acc
    },{})
    )
    const isDib = await DibService.isDibByUserId(storeId, userId)
    return processingData = {
        storeId: storeData.storeId,
        notice: storeData.notice,
        orderMethod: {
            delivery: {
                minPrice: storeData.minDeliveryPrice,
                deliveryTime: storeData.deliveryTime,
                tips: storeData.deliveryTip,
            },
            takeout: {
                minPrice: storeData.takeoutMinPrice,
                pickUpTime: storeData.takeoutPickupTime,
            }
        },
        storeInfo: {
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
            introduction: storeData.introduction,
        },
        storeHeader: {
            ownerReview: "리뷰 테이블 조사해서",
            dibs: storeData.dibs,
            isDib : isDib ? true : false,
            storeName: storeData.storeName,
            rating: Number(storeData.rating),
            reviewCnt : storeData.reviewCnt
        },
        menuInfo: menuData,
    }
}

exports.updateDibCnt = async (storeId, isPlus) => {
    if(isPlus){
        const plusDib = await Store.increment('dibs',{where:{storeId}})
        return (plusDib)
    }
    else{
        const minusDib = await Store.decrement('dibs',{where:{storeId}})
        return (minusDib)
    }
}

exports.findStoreByUserId = async (userId) => {
    const store = await Store.findOne({
        where: {userId},
    })
    return (store)
}


