const apiRouter = require("express").Router();

apiRouter.route("/").get((req, res, next) => {
  res.send("Golden Shoe API is live!");
});

module.exports = apiRouter;
