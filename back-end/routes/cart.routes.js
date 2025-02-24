const express = require('express');
const {middleVerifyToken} = require("../middlewares/auth.middleware");

const router = express.Router();

const {postAddCart, getCartData} = require('../controllers/cart.controller');

router.post('/', [middleVerifyToken], postAddCart)
router.get('/', [middleVerifyToken], getCartData);

module.exports = router;