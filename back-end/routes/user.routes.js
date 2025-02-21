const express = require('express');

const router = express.Router();
const {getCheckId, postSignUp, postSignIn , getRefreshReissued, getLatLng, postAddress} = require('../controllers/user.controller');
const {verifyToken} = require("../middlewares/auth.middleware");
const {getReviewList} = require("../controllers/review.controller");



router.post('/sign-up', postSignUp);
router.get('/sign-up/check-id/:id', getCheckId)
router.post('/sign-in', postSignIn);
router.post('/sign-in/reissue', getRefreshReissued);
router.get('/me/location',[verifyToken], getLatLng)
router.post('/me/address',[verifyToken], postAddress)
router.get('/reviews',[verifyToken], getReviewList)

module.exports = router;