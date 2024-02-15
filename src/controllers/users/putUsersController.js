const { User } = require("../../db");
const { validateUsername, validateEmail } = require("../../utils/validateUser");

const putUsersController = async (username, newUserData) => {
    username = username.toLowerCase();
    const userValidation = await validateUsername(username);

    if (userValidation) {
        if (newUserData.username) {
            const usernameValidation = await validateUsername(newUserData.username);
            
            if (usernameValidation)
                throw new Error("Username already exists");
        }

        if (newUserData.email) {
            const emailValidation = await validateEmail(newUserData.email);

            if (emailValidation)
                throw new Error("Email already exists");
        }
    } else throw Error("User does not exists");

    const updatedUser = await User.update(newUserData, { where: { username }, returning: true });

    return updatedUser;
}

module.exports = putUsersController;
