const ReviewService = require('../services/review.service');

exports.getReviewList = async(req, res) => {
    try{
        const reviewData = await ReviewService.findReviewsByStoreId(req.params, req.query)
        res.status(200).send(reviewData);
    }
    catch (error) {
        res.status(500).send({
            status: 500,
            message: error.message
        })
    }
}

exports.postCreateReview = async (req, res) => {
    try{
        const data = await ReviewService.createReview(req);
        res.status(201).send({
            status: 201,
            data: data
        })
    }
    catch (error) {
        res.status(500).send({
            status: 500,
            message: error.message
        })
    }
}

exports.getUserReview = async (req, res) => {
    try {
        const userReviews = await ReviewService.findReviewsByUserId(req)
        res.status(200).send(userReviews);
    }
    catch (error) {
        res.status(500).send({
            status: 500,
            message: error.message
        })
    }
}

exports.patchReview = async (req, res) => {
    try{
        const updated = await ReviewService.updateReview(req)
        if(updated[0] === 0){
            res.status(400).send({
                status: 400,
                message: "Not Found"
            })
        }
        else{
            res.status(200).send({
                status: 200,
                message: "Success"
            })
        }
    }
    catch (error) {
        res.status(500).send({
            status: 500,
            message: error.message
        })
    }
}

exports.deleteReview = async (req, res) => {
    try{
        const deleted = await ReviewService.deleteReview(req)
        if (deleted) {
            res.status(200).send({
                status: 200,
                message : "Success"
            })
        }
        else{
            res.status(400).send({
                status: 400,
                message : 'Not found'
            })
        }
    }
    catch (error) {
        res.status(500).send({
            status: 500,
            message: error.message
        })
    }
}