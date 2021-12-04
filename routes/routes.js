const express = require("express");

const { getUsers, getUserById } = require("../controllers/users.controller");
const {
  getProducts,
  getProductById,
} = require("../controllers/products.controller");
const { getOrders, getOrderById } = require("../controllers/orders.controller");

const apiRouter = express.Router();
const usersRouter = express.Router();
const productsRouter = express.Router();
const ordersRouter = express.Router();

apiRouter.use("/users", usersRouter);
apiRouter.use("/products", productsRouter);
apiRouter.use("/orders", ordersRouter);

apiRouter.route("/").get((req, res, next) => {
  res.send("Golden Shoe API is live!");
});

usersRouter.route("/").get(getUsers);

usersRouter.route("/:user_id").get(getUserById);

productsRouter.route("/").get(getProducts);

productsRouter.route("/:product_id").get(getProductById);

ordersRouter.route("/").get(getOrders);

ordersRouter.route("/:order_id").get(getOrderById);

module.exports = apiRouter;
