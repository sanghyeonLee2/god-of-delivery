const express = require('express');
const {middleVerifyToken} = require("../middlewares/auth.middleware");

const router = express.Router();
const {postCreateReview, patchReview} = require('../controllers/review.controller')

router.post('/create',[middleVerifyToken], postCreateReview)
router.patch('/:reviewId', [middleVerifyToken], patchReview)
router.delete('/:reviewId', [middleVerifyToken], )

module.exports = router;