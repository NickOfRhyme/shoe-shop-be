module.exports = {
  getUsers: (req, res, next) => {
    res.send("Listing users...!");
  },
  getUserById: (req, res, next) => {
    const { user_id } = req.params;
    res.send(`Checkout user ${user_id}`);
  },
};
