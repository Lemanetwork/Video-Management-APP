const { User } = require("../../db");

async function getUsersController() {
    const users = await User.findAll();
    
    if (users.length === 0) throw Error("There are no users");
    
    return users;
}

module.exports = getUsersController;
