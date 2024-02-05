const getUsersByUsernameController = require("../../controllers/users/getUsersByUsernameController");
const getUsersController = require("../../controllers/users/getUsersController");

const getUsersHandler = async (req, res) => {
    const { username } = req.query;

    try {
        if(username) {
            const user = await getUsersByUsernameController(username);
            res.status(200).json(user);
        } else {
            const allUsers = await getUsersController();
            res.status(200).json(allUsers);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = getUsersHandler;