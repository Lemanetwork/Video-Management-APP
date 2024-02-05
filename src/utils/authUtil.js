require("dotenv").config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.PRIVATE_KEY, { expiresIn: process.env.EXPIRE_TIME });
};

const comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

module.exports = {
    generateToken,
    comparePassword
};