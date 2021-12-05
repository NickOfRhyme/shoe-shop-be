const usersTable = require("../db/connection")("users");

module.exports = {
  fetchUsers: () => usersTable.select("*"),
  fetchUserById: (userId) => usersTable.where({ id: userId }),
};
