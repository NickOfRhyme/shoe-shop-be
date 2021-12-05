const { fetchProducts, fetchProductById } = require("../models/products.model");

module.exports = {
  getProducts: (req, res, next) => {
    const { category_id, shoe_type_id, size } = req.query;
    fetchProducts(category_id, shoe_type_id, size).then((products) => {
      res.send({ products });
    });
  },
  getProductById: (req, res, next) => {
    const { product_id } = req.params;

    fetchProductById(product_id).then((products) => {
      res.send({ products });
    });
  },
};
