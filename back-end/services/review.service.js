const Review = require('../models/review');

exports.findReviewsByStoreId = async ({storeId}, {limit, page}) => {
    const pageNum = Number(page);
    const limitNum = Number(limit);
    const data = await Review.findAll({
        where: {storeId: storeId},
        offset: (pageNum - 1) * limitNum,
        limit: limitNum,
    })

    return ({
        totalItems: data.length,
        currentPage: `${pageNum} / ${Math.ceil(data.length / limitNum)}`,
        reviewList: data
    })
}

exports.createReview = async ({userId, body}) => {
    const createData = await Review.create(body, userId)
    return (createData)
}

exports.findReviewsByUserId = async ({userId, query}) => {
    const {limit, page} = query;
    const limitNum = Number(limit);
    const pageNum = Number(page);
    const reviews = await Review.findAll({
        where: {userId: userId},
        offset: (pageNum - 1) * limitNum,
        limit: limitNum,
    })
    return ({
        totalItems: reviews.length,
        currentPage: pageNum,
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