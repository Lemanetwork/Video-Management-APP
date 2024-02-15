const deleteUsersController = require("../../controllers/users/deleteUsersController");

const deleteUsersHandler = async (req, res) => {
  const { username } = req.params;
  try {
      await deleteUsersController(username);
      res.status(204).send("User was deleted successfully");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = deleteUsersHandler;