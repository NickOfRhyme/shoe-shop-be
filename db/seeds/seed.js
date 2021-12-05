const {
  productData,
  categoryData,
  shoeTypeData,
  userData,
} = require("../data/index");
const { makeRefObj, formatProducts } = require("../utils/utils");

exports.seed = (knex) => {
  const categoryInsertions = knex("productcategories")
    .insert(categoryData)
    .returning("*");
  const shoeTypeInsertions = knex("shoetypes")
    .insert(shoeTypeData)
    .returning("*");
  return knex
    .insert(userData)
    .into("users")
    .then(() => Promise.all([categoryInsertions, shoeTypeInsertions]))
    .then(([categoryRows, shoeTypeRows]) => {
      const categoryIdRef = makeRefObj(categoryRows, "name", "id");
      const shoeTypeIdRef = makeRefObj(shoeTypeRows, "name", "id");
      const formattedProducts = formatProducts(
        productData,
        categoryIdRef,
        shoeTypeIdRef
      );

      return knex("products").insert(formattedProducts);
    });
};
