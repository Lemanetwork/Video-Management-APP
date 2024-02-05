const deleteUsersController = require("../../controllers/users/deleteUsersController");

const deleteUsersHandler = async (req, res) => {
  const { username } = req.params;
  try {
      await deleteUsersController(username);
      res.status(200).json({ message: `User ${username} was deleted successfully` });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = deleteUsersHandler;