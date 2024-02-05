const { User } = require("../db")

const validateUsername = async (username) => {
    const user = await User.findOne({ where: { username } });
    
    if (user !== null) return true;
    else return false;
}

const validateEmail = async (email) => {
    const user = await User.findOne({ where: { email } });
    
    if (user !== null) return true;
    else return false;
}

module.exports = { validateUsername, validateEmail };