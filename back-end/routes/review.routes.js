const express = require('express');
const {middleVerifyToken} = require("../middlewares/auth.middleware");

const router = express.Router();
const {postCreateReview, patchReview, deleteReview} = require('../controllers/review.controller')

router.post('/',[middleVerifyToken], postCreateReview)
router.patch('/:reviewId', [middleVerifyToken], patchReview)
router.delete('/:reviewId', [middleVerifyToken], deleteReview)

module.exports = router;