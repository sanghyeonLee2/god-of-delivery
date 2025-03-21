const {Review, CeoReview} = require('../models');
const {sequelize} = require('../models');
const {Op} = require("sequelize");
const StoreService = require('./store.service')


exports.findReviewsByStoreId = async ({storeId}, {page}) => {
    const pageNum = Number(page);
    const data = await Review.findAll({
        where: {storeId},
        offset: (pageNum - 1) * 10,
        limit: 10,
        include:[{model:CeoReview}]
    })
    const countReviews = await Review.findAll({
        attributes: [
            [sequelize.fn('COUNT', sequelize.col('rating')), 'count'],
        ],
        where:{storeId, rating: [1, 2, 3, 4, 5]},
        group:['rating'],
        order:[['rating','ASC']],
    });
    const countList = countReviews.map(item => item.dataValues.count)
    return ({
        totalItems: data.length,
        reviewStat: countList,
        reviewList: data
    })
}

exports.createReview = async ({userId, body}) => {
    const createData = await Review.create({
        userId,
        storeId: body.storeId,
        orderId: body.orderId,
        rating: body.rating,
        content: body.content,
        img: body.img
    })
    return (createData)
}

exports.findReviewsByUserId = async ({userId, query}) => {
    const {page} = query;
    const pageNum = Number(page);
    const reviews = await Review.findAll({
        where: {userId: userId},
        offset: (pageNum - 1) * 10,
        limit: 10,
        include:[{model:CeoReview}]
    })
    const countReviews = await Review.findAll({
        attributes: [
            [sequelize.fn('COUNT', sequelize.col('rating')), 'count'],
        ],
        where:{userId, rating: [1, 2, 3, 4, 5]},
        group:['rating'],
        order:[['rating','ASC']],
    });

    const countList = countReviews.map(item => item.dataValues.count)
    return ({
        totalItems: reviews.length,
        reviewStat: countList,
        reviewList: reviews
    })
}

exports.updateReview = async ({userId, body, params}) => {
    const {reviewId} = params;
    const updated = await Review.update(body,
        {
            where: {reviewId: reviewId, userId: userId},
        }
    )
    return (updated)
}

exports.deleteReview = async({userId, params}) => {
    const {reviewId} = params;
    const delReview = await Review.destroy({
        where: {userId: userId, reviewId: reviewId},
    })
    return (delReview)
}

exports.reviewCntInThreeMonth = async(storeId) => {
    const threeMonthsAgo = new Date();
    threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
    const reviewCount = await Review.count({
        where:{storeId,
        createdAt: {[Op.gte]:threeMonthsAgo}}
    })
}

exports.findListOwnerReview = async({userId, query}) => {
    const store = await StoreService.findStoreByUserId(userId)
    const pageNum = Number(query.page);
    const data = await Review.findAll({
        where: {storeId: store.storeId},
        offset: (pageNum - 1) * 10,
        limit: 10,
        include:[{model:CeoReview}]
    })
    const countReviews = await Review.findAll({
        attributes: [
            [sequelize.fn('COUNT', sequelize.col('rating')), 'count'],
        ],
        where:{storeId: store.storeId, rating: [1, 2, 3, 4, 5]},
        group:['rating'],
        order:[['rating','ASC']],
    });
    const countList = countReviews.map(item => item.dataValues.count)
    return ({
        totalItems: data.length,
        reviewStat: countList,
        reviewList: data
    })
}

exports.createCeoReview = async({userId},{reviewId, content}) => {
    const newCeoReview = await CeoReview.create({
        content, userId, reviewId
    })
    return (newCeoReview)
}

exports.updateCeoReview = async ({params, body}) => {
    const updateCeoReview = await CeoReview.update(body, {where: {reviewId: params.reviewId}})
    console.log(updateCeoReview)
    return (updateCeoReview > 0)
}

exports.deleteCeoReview = async({reviewId}) => {
    const delCeoReview = await CeoReview.destroy({
        where: {reviewId},
    })
    return (delCeoReview)
}