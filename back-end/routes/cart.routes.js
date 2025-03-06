const express = require('express');
const {middleVerifyToken} = require("../middlewares/auth.middleware");

const router = express.Router();

const {postAddCart, getCartData, getCartMenuDetail, deleteCart, postUpdateCartItem, deleteCartItem} = require('../controllers/cart.controller');

router.post('/', [middleVerifyToken], postAddCart)
router.get('/', [middleVerifyToken], getCartData);
router.get('/:menuId',[middleVerifyToken], getCartMenuDetail);
router.post('/:cartItemId', [middleVerifyToken], postUpdateCartItem)
router.delete('/:cartId', [middleVerifyToken], deleteCart);
router.delete('/item/:cartItemId',[middleVerifyToken], deleteCartItem);

module.exports = router;