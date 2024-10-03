const express = require('express');
const {getDibsWithStore,getDibsListByUser, getDibsListByStore,postDibFilled, postDibCancel} = require("../controllers/dibController");
const {verifyToken} = require("../middlewares/authMiddleware");
const router = express.Router();

//찜 목록 가져오기
router.get('/storeList/:userId',getDibsWithStore)
router.get('/:userId', getDibsListByUser)
router.get('/:storeId', getDibsListByStore)
//찜 하기
router.post('/', postDibFilled)
router.post('/cancel', postDibCancel)

module.exports = router