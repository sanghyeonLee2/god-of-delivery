const Review = require('../models/review');
const {sequelize} = require('../models');

exports.findReviewsByStoreId = async ({storeId}, {page}) => {
    const pageNum = Number(page);
    const data = await Review.findAll({
        where: {storeId: storeId},
        offset: (pageNum - 1) * 10,
        limit: 10,
    })
    return ({
        totalItems: data.length,
        currentPage: `${pageNum} / ${Math.ceil(data.length / 10)}`,
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
    })
    const countReviews = await Review.findAll({
        attributes: [
            [sequelize.fn('COUNT', sequelize.col('rating')), 'count'],
        ],
        where:{userId, rating: [1, 2, 3, 4, 5]},
        group:['rating'],
        order:[['rating','ASC']]
    });
    const countList = countReviews.map(item => item.dataValues.count)
    return ({
        totalItems: reviews.length,
        currentPage: pageNum,
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