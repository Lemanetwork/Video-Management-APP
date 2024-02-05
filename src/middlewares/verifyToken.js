require("dotenv").config();
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'There is no Token, Unauthorized access' });
  }

  jwt.verify(token, process.env.PRIVATE_KEY, (error, user) => {
    if (error) {
      return res.status(403).json({ error: error.message });
    }
    req.user = user;
    next();
  });
};

module.exports = verifyToken;