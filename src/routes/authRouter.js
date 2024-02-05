const { Router } = require("express");
const login = require("../controllers/authController");

const authRouter = Router();

authRouter.post("/login", login);

module.exports = authRouter;