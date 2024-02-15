const postUsersController = require("../../controllers/users/postUsersController");

const postUsersHandler = async (req, res) => {
    const { name, last_name, username, email, password } = req.body;

    try {
        const newUser = await postUsersController(name, last_name, username, email, password);
        
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = postUsersHandler;
