const knex = require("../db/connection");

module.exports = {
  fetchOrders: () =>
    knex("orders")
      .select("*")
      .leftJoin("orderitems", "orders.id", "orderitems.order_id"),
  fetchOrderById: (orderId) => knex("orders").where({ order_id: orderId }),
  fetcdOrdersByUserId: (userId) => {
    knex("orders").where({ user });
  },
};
