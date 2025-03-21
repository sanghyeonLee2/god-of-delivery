const express = require("express");
const { middleVerifyToken } = require("../middlewares/auth.middleware");
const { postAddOrders, getOrder } = require("../controllers/order.controller");

const router = express.Router();

router.post("/", [middleVerifyToken], postAddOrders);
router.get("/:orderId", [middleVerifyToken], getOrder);

module.exports = router;
