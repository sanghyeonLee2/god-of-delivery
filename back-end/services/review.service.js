const Review = require('../models/review');

exports.getReviewsByStoreId = async ({storeId},{limit,page}) => {
    const pageNum = Number(page);
    const limitNum = Number(limit);
    const data = await Review.findAll({
        where: {storeId: storeId},
        offset: (pageNum - 1) * limitNum,
        limit: limitNum,
    })

    return({
        totalItems: data.length,
        currentPage: `${pageNum} / ${Math.ceil(data.length / limitNum)}`,
        reviewList: data
    })
}