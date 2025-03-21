const express = require("express");
const {
  getUserDibStoreList,
  postAddDib,
  deleteDibCancel,
} = require("../controllers/dib.controller");
const { middleVerifyToken } = require("../middlewares/auth.middleware");
const router = express.Router();

//찜 목록 가져오기
router.get("/storeList", [middleVerifyToken], getUserDibStoreList);

//찜 하기
router.post("/", [middleVerifyToken], postAddDib);
router.delete("/:storeId", [middleVerifyToken], deleteDibCancel);

module.exports = router;
