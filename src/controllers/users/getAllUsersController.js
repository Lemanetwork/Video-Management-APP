const { User } = require("../../db");

async function getAllUsersController() {
    const users = await User.findAll();
    
    if (users.length === 0) throw new Error("There are no users");
    
    return users;
}

module.exports = getAllUsersController;
