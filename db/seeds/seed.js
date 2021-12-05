const {
  productData,
  categoryData,
  shoeTypeData,
  userData,
  orderData,
  orderItemData,
} = require("../data/index");
const {
  makeRefObj,
  formatProducts,
  formatOrders,
  formatOrderItems,
} = require("../utils/utils");

exports.seed = (knex) => {
  const categoryInsertions = knex("productcategories")
    .insert(categoryData)
    .returning("*");
  const shoeTypeInsertions = knex("shoetypes")
    .insert(shoeTypeData)
    .returning("*");
  const userInsertions = knex("users").insert(userData).returning("*");

  return Promise.all([categoryInsertions, shoeTypeInsertions])
    .then(([categoryRows, shoeTypeRows]) => {
      const categoryIdRef = makeRefObj(categoryRows, "name", "id");
      const shoeTypeIdRef = makeRefObj(shoeTypeRows, "name", "id");
      const formattedProducts = formatProducts(
        productData,
        categoryIdRef,
        shoeTypeIdRef
      );

      return Promise.all([
        knex("products").insert(formattedProducts).returning("*"),
        userInsertions,
      ]);
    })
    .then(([productRows, userRows]) => {
      const userIdRef = makeRefObj(userRows, "second_name", "id");
      const formattedOrders = formatOrders(orderData, userIdRef);

      return Promise.all([
        productRows,
        knex("orders").insert(formattedOrders).returning("*"),
      ]);
    })
    .then(([productRows, orderRows]) => {
      const productIdRef = makeRefObj(productRows, "product_name", "id");
      const orderIdRef = makeRefObj(orderRows, "total_price_pence", "id");

      return knex("orderitems")
        .insert(formatOrderItems(orderItemData, productIdRef, orderIdRef))
        .returning("*");
    });
};
