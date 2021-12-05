const knex = require("../db/connection");

module.exports = {
  fetchProducts: (categoryId, shoeTypeId, size) =>
    knex("products")
      .select("*")
      .modify((query) => {
        if (categoryId !== undefined) query.where({ category_id: categoryId });
        if (shoeTypeId !== undefined) query.where({ shoe_type_id: shoeTypeId });
        if (size !== undefined) query.where({ size: size });
      }),
  fetchProductById: (productId) => knex("products").where({ id: productId }),
};
