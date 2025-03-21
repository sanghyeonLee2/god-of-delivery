const express = require('express');

const router = express.Router();
const {getLatLng, patchUserAddress, getUserInfo, getUserDibStoreList, getUserOrders} = require('../controllers/user.controller');
const {middleVerifyToken} = require("../middlewares/auth.middleware");
const {getUserReview} = require("../controllers/review.controller");

router.get("/me",[middleVerifyToken], getUserInfo);
router.get('/me/location',[middleVerifyToken], getLatLng)
router.patch('/me/address',[middleVerifyToken], patchUserAddress)
router.get('/me/reviews',[middleVerifyToken], getUserReview)
router.get('/me/orders',[middleVerifyToken], getUserOrders)
router.get('/me/dibs', [middleVerifyToken], getUserDibStoreList)

module.exports = router;