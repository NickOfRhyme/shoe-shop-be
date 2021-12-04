const express = require("express");

const apiRouter = express.Router();
const usersRouter = express.Router();

apiRouter.use("/users", usersRouter);

apiRouter.route("/").get((req, res, next) => {
  res.send("Golden Shoe API is live!");
});

usersRouter.route("/").get((req, res, next) => {
  res.send("Listing users...!");
});

usersRouter.route("/:user_id").get((req, res, next) => {
  const { user_id } = req.params;
  res.send(`Checkout user ${req.params.user_id}`);
});

module.exports = apiRouter;
