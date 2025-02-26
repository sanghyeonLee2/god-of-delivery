const express = require('express');
const {middleVerifyToken} = require("../middlewares/auth.middleware");
const {postAddOrders} = require('../controllers/order.controller')

const router = express.Router();

router.post('/',[middleVerifyToken], postAddOrders);

module.exports = router;