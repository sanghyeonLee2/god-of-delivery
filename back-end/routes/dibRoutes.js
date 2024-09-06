const express = require('express');
const {getDibStoreList, postDibFilled, postDibCancel} = require("../controllers/dibController");
const {verifyToken} = require("../middlewares/authMiddleware");
const router = express.Router();

//찜 목록 가져오기
router.get('/',verifyToken, getDibStoreList)
//찜 하기
router.post('/', postDibFilled)
router.post('/cancel',verifyToken, postDibCancel)

module.exports = router