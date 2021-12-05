const { fetchUsers, fetchUserById } = require("../models/users.models");

module.exports = {
  getUsers: (req, res, next) => {
    fetchUsers().then((users) => {
      res.send({ users });
    });
  },
  getUserById: (req, res, next) => {
    const { user_id } = req.params;
    fetchUserById(user_id).then((user) => {
      res.send({ user });
    });
  },
};
