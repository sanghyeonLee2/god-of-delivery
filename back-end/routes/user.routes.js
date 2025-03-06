const express = require('express');

const router = express.Router();
const {getLatLng, getAddress, getUserInfo} = require('../controllers/user.controller');
const {middleVerifyToken} = require("../middlewares/auth.middleware");
const {getUserReview} = require("../controllers/review.controller");
const {getUserOrders} = require("../controllers/user.controller");

router.get("/me",[middleVerifyToken], getUserInfo);
router.get('/me/location',[middleVerifyToken], getLatLng)
router.get('/me/address',[middleVerifyToken], getAddress)
router.get('/me/reviews',[middleVerifyToken], getUserReview)
router.get('/me/orders',[middleVerifyToken], getUserOrders)

module.exports = router;