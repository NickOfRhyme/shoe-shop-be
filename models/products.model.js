const knex = require("../db/connection");

module.exports = {
  fetchProducts: (categoryId, shoeTypeId, size) =>
    knex("products")
      .select("*")
      .modify((query) => {
        if (categoryId !== undefined) query.where({ category_id: categoryId });
        if (shoeTypeId !== undefined) query.where({ shoetype_id: shoeTypeId });
        if (size !== undefined) query.where({ size: size });
      }),
  fetchProductById: (productId) => knex("products").where({ id: productId }),
  insertProduct: (
    category_id,
    shoetype_id,
    product_name,
    short_desc,
    full_desc,
    price_pence,
    stock,
    size
  ) =>
    knex("products")
      .insert({
        category_id,
        shoetype_id,
        product_name,
        short_desc,
        full_desc,
        price_pence,
        stock,
        size,
      })
      .returning("*")
      .then((result) => result),
  updateStockAfterOrder: (productId) =>
    knex("products")
      .increment({ stock: -1 })
      .where({ id: productId })
      .returning("*")
      .then((result) => result),
  updateAmountInCarts: (productId, increment = 0) =>
    knex("products")
      .increment({ in_carts: increment })
      .where({ id: productId })
      .returning("*")
      .then((result) => result),
};
