const express = require('express');
const {middleVerifyToken} = require("../middlewares/auth.middleware");
const {postAddOrders, getUserOrders} = require('../controllers/order.controller')

const router = express.Router();

router.post('/',[middleVerifyToken], postAddOrders);
router.get('/:orderId',[middleVerifyToken], getUserOrders);

module.exports = router;