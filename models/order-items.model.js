const knex = require("../db/connection");

module.exports = {
  fetchOrderItemsByOrderId: (orderId) =>
    knex("orderitems").where({ order_id: orderId }),
  insertOrderItem: (order_id, product_id) =>
    knex("orderitems")
      .insert({ order_id, product_id })
      .returning("*")
      .then((result) => result),
};
