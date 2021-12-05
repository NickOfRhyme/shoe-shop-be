const express = require("express");

const { getUsers, getUserById } = require("../controllers/users.controller");
const {
  getProducts,
  getProductById,
  postProduct,
  putProductInCart,
  reduceStockAfterOrder,
} = require("../controllers/products.controller");
const {
  getOrders,
  getOrderById,
  postOrder,
  getOrdersByUserId,
} = require("../controllers/orders.controller");
const {
  getOrderItemsByOrderId,
} = require("../controllers/order-items.controller");

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

usersRouter.route("/:user_id/orders").get(getOrdersByUserId);

productsRouter.route("/").get(getProducts).post(postProduct);

productsRouter.route("/:product_id").get(getProductById);

productsRouter.route("/:product_id/placeincart").put(putProductInCart);

productsRouter.route("/:product_id/reducestock").put(reduceStockAfterOrder);

ordersRouter.route("/").get(getOrders).post(postOrder);

ordersRouter.route("/:order_id").get(getOrderById);

ordersRouter.route("/:order_id/items").get(getOrderItemsByOrderId);

module.exports = apiRouter;
