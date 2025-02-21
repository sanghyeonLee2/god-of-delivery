const express = require('express');
const {verifyToken} = require("../middlewares/auth.middleware");

const router = express.Router();
const {postCreateReview, patchReview} = require('../controllers/review.controller')

router.post('/create',[verifyToken], postCreateReview)
router.patch('/:reviewId', [verifyToken], patchReview)
router.delete('/:reviewId', [verifyToken], )

module.exports = router;