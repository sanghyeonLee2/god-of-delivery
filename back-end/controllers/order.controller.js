const OrderService = require("../services/order.service");

exports.postAddOrders = async (req, res) => {
  try {
    const newOrder = await OrderService.createOrder(req);
    res.status(201).send(newOrder);
  } catch (err) {
    res.status(500).send({
      status: 500,
      message: err.message,
    });
  }
};

exports.getOrder = async (req, res) => {
  try {
    const getData = await OrderService.findOrderByOrderId(req.params);
    res.status(200).send(getData);
  } catch (err) {
    res.status(500).send({
      status: 500,
      message: err.message,
    });
  }
};
