const { User } = require("../../db");

const deleteUsersController = async (username) => {
  await User.destroy({ where: { username } });
}

module.exports = deleteUsersController;
