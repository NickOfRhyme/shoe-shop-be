const knex = require("../db/connection");

module.exports = {
  fetchOrders: () => knex("orders").select("*"),
  fetchOrderById: (orderId) => knex("orders").where({ order_id: orderId }),
  fetchOrdersByUserId: (userId) => knex("orders").where({ user_id: userId }),
  insertOrder: (user_id, total_price_pence, expected_delivery_date) =>
    knex("orders")
      .insert({
        user_id,
        total_price_pence,
        expected_delivery_date,
      })
      .returning("*")
      .then((result) => result),
};
