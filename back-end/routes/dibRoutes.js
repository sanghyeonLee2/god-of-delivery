const express = require('express');
const {getDibStoreList, postDibFilled, postDibCancel} = require("../controllers/dibController");
const router = express.Router();

//찜 목록 가져오기
router.get('/', getDibStoreList)
//찜 하기
router.post('/', postDibFilled)
router.post('/cancel', postDibCancel)

module.exports = router