const express = require('express');

const router = express.Router();
const {getStoresList, postCreateStore, getStore} = require('../controllers/store.controller')
const {getReviewList} = require('../controllers/review.controller')
const {middleVerifyToken} = require("../middlewares/auth.middleware");



router.get('/:category',[middleVerifyToken], getStoresList);
router.post('/create',[middleVerifyToken], postCreateStore);
router.get('/info/:storeId', [middleVerifyToken], getStore);
router.get('/:storeId/reviews', getReviewList);

module.exports = router;