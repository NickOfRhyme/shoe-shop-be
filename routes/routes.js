const express = require("express");

const apiRouter = express.Router();
const usersRouter = express.Router();
const productsRouter = express.Router();
const ordersRouter = express.Router();

apiRouter.use("/users", usersRouter);
apiRouter.use("/products", productsRouter);

apiRouter.route("/").get((req, res, next) => {
  res.send("Golden Shoe API is live!");
});

usersRouter.route("/").get((req, res, next) => {
  res.send("Listing users...!");
});

usersRouter.route("/:user_id").get((req, res, next) => {
  const { user_id } = req.params;
  res.send(`Checkout user ${user_id}`);
});

productsRouter.route("/").get((req, res, next) => {
  res.send("Listing products...!");
});

productsRouter.route("/:product_id").get((req, res, next) => {
  const { product_id } = req.params;
  const { category_id, shoe_type_id, size } = req.query;
  res.send(
    `Checkout product ${product_id}. Sized ${size}, category ${category_id}, shoe type ${shoe_type_id}`
  );
});

ordersRouter.route("/").get((req, res, next) => {
  res.send("Listing orders...!");
});

ordersRouter.route("/:order_id").get((req, res, next) => {
  const { order_id } = req.params;
  res.send(`Checkout order ${order_id}`);
});

module.exports = apiRouter;
