const express = require('express');

const router = express.Router();
const {getStoresList, postCreateStore, getStore} = require('../controllers/store.controller')
const {getReviewList} = require('../controllers/review.controller')
const {verifyToken} = require("../middlewares/auth.middleware");



router.get('/:category',[verifyToken], getStoresList);
router.post('/create',[verifyToken], postCreateStore);
router.post('/:storeId', getStore);
router.get('/:storeId/reviews', getReviewList);

module.exports = router;