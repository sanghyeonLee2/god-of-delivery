const express = require('express');
const {middleVerifyTokenIsOwner} = require("../middlewares/auth.middleware");
const {getOwnerStore, postOwnerReview, getOwnerReview, patchOwnerReview, deleteOwnerReview,getOwnerStoreMenus} = require("../controllers/owner.controller");


const router = express.Router();

router.get('/me/store', [middleVerifyTokenIsOwner], getOwnerStore);
router.get('/me/reviews', [middleVerifyTokenIsOwner], getOwnerReview);
router.get('/me/menus', [middleVerifyTokenIsOwner], getOwnerStoreMenus);
router.post('/me/reviews', [middleVerifyTokenIsOwner], postOwnerReview);
router.patch('/me/reviews/:reviewId', [middleVerifyTokenIsOwner], patchOwnerReview);
router.delete('/me/reviews/:reviewId', [middleVerifyTokenIsOwner], deleteOwnerReview);

module.exports = router;