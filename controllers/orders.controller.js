const { insertOrderItem } = require("../models/order-items.model");
const {
  fetchOrderById,
  fetchOrders,
  fetchOrdersByUserId,
  insertOrder,
} = require("../models/orders.model");

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
  getOrdersByUserId: (req, res, next) => {
    const { user_id } = req.params;
    fetchOrdersByUserId(user_id).then((orders) => {
      res.send({ orders });
    });
  },
  postOrder: (req, res, next) => {
    const { user_id, total_price_pence, expected_delivery_date, product_ids } =
      req.body;
    insertOrder(user_id, total_price_pence, expected_delivery_date).then(
      ([order]) => {
        product_ids.forEach((product_id) => {
          insertOrderItem(order.id, product_id);
        });
        res.send({ order });
      }
    );
  },
};
