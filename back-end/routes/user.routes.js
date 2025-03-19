const express = require('express');

const router = express.Router();
const {getLatLng, patchUserAddress, getUserInfo} = require('../controllers/user.controller');
const {middleVerifyToken} = require("../middlewares/auth.middleware");
const {getUserReview} = require("../controllers/review.controller");
const {getUserOrders} = require("../controllers/user.controller");

router.get("/me",[middleVerifyToken], getUserInfo);
router.get('/me/location',[middleVerifyToken], getLatLng)
router.patch('/me/address',[middleVerifyToken], patchUserAddress)
router.get('/me/reviews',[middleVerifyToken], getUserReview)
router.get('/me/orders',[middleVerifyToken], getUserOrders)

module.exports = router;