module.exports = {
  getProducts: (req, res, next) => {
    res.send("Listing products...!");
  },
  getProductById: (req, res, next) => {
    const { product_id } = req.params;
    const { category_id, shoe_type_id, size } = req.query;
    res.send(
      `Checkout product ${product_id}. Sized ${size}, category ${category_id}, shoe type ${shoe_type_id}`
    );
  },
};
