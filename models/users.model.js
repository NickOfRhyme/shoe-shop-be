const knex = require("../db/connection");

module.exports = {
  fetchUsers: () => knex("users").select("*"),
  fetchUserById: (userId) => knex("users").where({ id: userId }),
};
