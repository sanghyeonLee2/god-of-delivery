const express = require('express');

const router = express.Router();
const {getCheckId, postSignUp, postSignIn , getRefreshReissued, getLatLng, postAddress} = require('../controllers/user.controller');
const {middleVerifyToken} = require("../middlewares/auth.middleware");
const {getUserReview} = require("../controllers/review.controller");



router.post('/sign-up', postSignUp);
router.get('/sign-up/check-id/:id', getCheckId)
router.post('/sign-in', postSignIn);
router.post('/sign-in/reissue', getRefreshReissued);
router.get('/me/location',[middleVerifyToken], getLatLng)
router.post('/me/address',[middleVerifyToken], postAddress)
router.get('/reviews',[middleVerifyToken], getUserReview)

module.exports = router;