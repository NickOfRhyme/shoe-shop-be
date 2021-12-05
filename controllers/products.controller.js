const {
  fetchProducts,
  fetchProductById,
  insertProduct,
  updateAmountInCarts,
  updateStockAfterOrder,
} = require("../models/products.model");

const schedule = require("node-schedule");

module.exports = {
  getProducts: (req, res, next) => {
    const { category_id, shoetype_id, size } = req.query;
    fetchProducts(category_id, shoetype_id, size).then((products) => {
      res.send({ products });
    });
  },
  getProductById: (req, res, next) => {
    const { product_id } = req.params;
    fetchProductById(product_id).then((products) => {
      res.send({ products });
    });
  },
  postProduct: (req, res, next) => {
    const {
      category_id,
      shoetype_id,
      product_name,
      short_desc,
      full_desc,
      price_pence,
      stock,
      size,
    } = req.body;

    return insertProduct(
      category_id,
      shoetype_id,
      product_name,
      short_desc,
      full_desc,
      price_pence,
      stock,
      size
    ).then(([product]) => res.send({ product }));
  },
  putProductInCart: (req, res, next) => {
    const { product_id } = req.params;
    updateAmountInCarts(product_id, +1).then(([product]) => {
      const currentTime = new Date();
      const cartRemovalTime = new Date(currentTime.getTime() + 5 * 60000);
      schedule.scheduleJob(cartRemovalTime, () =>
        updateAmountInCarts(product_id, -1)
      );
      res.send({ product, cartRemovalTime });
    });
  },
  reduceStockAfterOrder: (req, res, next) => {
    const { product_id } = req.params;
    updateStockAfterOrder(product_id).then(([product]) => {
      res.send({ product });
    });
  },
};
