const CartService = require("../services/cart.service");
const MenuService = require("../services/menu.service");

exports.postAddCart = async (req, res) => {
  try {
    await CartService.addCart(req.userId, req.body);
    res.status(200).send({
      message: "Success",
    });
  } catch (err) {
    res.status(500).send({
      status: 500,
      message: err.message,
    });
  }
};

exports.getCartData = async (req, res) => {
  try {
    const cartData = await CartService.findCartDataByUserId(req.userId);
    res.status(200).send(cartData);
  } catch (err) {
    res.status(500).send({
      status: 500,
      message: err.message,
    });
  }
};

exports.getCartMenuDetail = async (req, res) => {
  try {
    const menuData = await MenuService.findById(req.params);
    res.status(200).send(menuData);
  } catch (err) {
    res.status(500).send({
      status: 500,
      message: err.message,
    });
  }
};
exports.updateCartItem = async (req, res) => {
  try {
   await CartService.updateCartItemOption(
      req.params,
      req.body,
    );
    res.status(200).send({
      status: 200,
      message: "Success",
    });
  } catch (err) {
    res.status(500).send({
      status: 500,
      message: err.message,
    });
  }
};

exports.deleteCart = async (req, res) => {
  try {
    await CartService.destroyCart(req.params);
    res.status(200).send({
      message: "Success",
    });
  } catch (err) {
    res.status(500).send({
      status: 500,
      message: err.message,
    });
  }
};

exports.deleteCartItem = async (req, res) => {
  try {
    await CartService.destroyCartItem(req, req.params);
    res.status(200).send({
      message: "Success",
    });
  } catch (err) {
    res.status(500).send({
      status: 500,
      message: err.message,
    });
  }
};
