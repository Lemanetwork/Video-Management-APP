const { User } = require("../../db");
const { validateUsername } = require("../../utils/validateUser")

const deleteUsersController = async (username) => {
  const userValidation = await validateUsername(username)
  
  if (userValidation) await User.destroy({ where: { username } });
  else throw new Error("User does not exists")
}

module.exports = deleteUsersController;
