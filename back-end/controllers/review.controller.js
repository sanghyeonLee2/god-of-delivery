const ReviewService = require('../services/review.service');

exports.getReviewList = async(req, res) => {
    try{
        const reviewData = await ReviewService.getReviewsByStoreId(req.params, req.query)
        res.status(200).send(reviewData);
    }
    catch (error) {
        res.status(500).send({
            status: 500,
            message: error.message
        })
    }

}