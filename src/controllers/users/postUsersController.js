const { User } = require("../../db");
const { validateUsername, validateEmail } = require("../../utils/validateUser");

const postUsersController = async (name, last_name, username, email, password) => {
    username = username.toLowerCase();
    email = email.toLowerCase();
    
    const usernameValidation = await validateUsername(username);
    const emailValidation = await validateEmail(email);
    
    if (usernameValidation)
        throw Error("Username already exists");
    else if (emailValidation)
        throw Error("Email already exists");
    else {
        const newUser = await User.create({ name, last_name, username, email, password });
        return newUser;
    }

}

module.exports = postUsersController;
