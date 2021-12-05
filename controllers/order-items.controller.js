const { fetchOrderItemsByOrderId } = require("../models/order-items.model");

module.exports = {
  getOrderItemsByOrderId: (req, res, next) => {
    const { order_id } = req.params;
    fetchOrderItemsByOrderId(order_id).then((order_items) => {
      res.send({ order_items });
    });
  },
};
