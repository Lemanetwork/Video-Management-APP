const { User } = require("../../db");

const getUsersByUsernameController = async (username) => {
    username = username.toLowerCase();
    
    const user = await User.findOne({ where: { username } });
    
    if (!user) throw Error(`User was not found`);
    
    return user;
}

module.exports = getUsersByUsernameController;
