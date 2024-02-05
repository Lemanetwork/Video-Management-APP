const putUsersController = require("../../controllers/users/putUsersController");

const putUsersHandler = async (req, res) => {
    const { username } = req.params;
    const newUserData = req.body;
    
    try {
        const updatedUser = await putUsersController(username, newUserData);
        
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = putUsersHandler;
