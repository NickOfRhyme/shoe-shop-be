const { fetchOrderById, fetchOrders } = require("../models/orders.model");

module.exports = {
  getOrders: (req, res, next) => {
    fetchOrders().then((orders) => {
      res.send({ orders });
    });
  },
  getOrderById: (req, res, next) => {
    const { order_id } = req.params;
    fetchOrderById(order_id).then((order) => {
      res.send({ order });
    });
  },
};
