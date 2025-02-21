const express = require('express');
const {verifyToken} = require("../middlewares/auth.middleware");

const router = express.Router();
const {postCreateReview} = require('../controllers/review.controller')

router.post('/create',[verifyToken], postCreateReview)

module.exports = router;