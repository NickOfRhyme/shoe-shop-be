module.exports = {
  getOrders: (req, res, next) => {
    res.send("Listing orders...!");
  },
  getOrderById: (req, res, next) => {
    (req, res, next) => {
      const { order_id } = req.params;
      res.send(`Checkout order ${order_id}`);
    };
  },
};
