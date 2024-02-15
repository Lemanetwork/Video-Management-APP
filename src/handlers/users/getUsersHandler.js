const getAllUsersController = require("../../controllers/users/getAllUsersController");
const getUsersByUsernameController = require("../../controllers/users/getUsersByUsernameController");


const getUsersHandler = async (req, res) => {
    const { username } = req.query;
    
    try {
        if (username) {
            const user = await getUsersByUsernameController(username);

            res.status(200).json(user);
        } else {
            const allUsers = await getAllUsersController();

            res.status(200).json(allUsers);    
        }
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

module.exports = getUsersHandler;