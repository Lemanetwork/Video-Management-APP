const { Router } = require("express");
const postUsersHandler = require("../handlers/users/postUsersHandler")
const getUsersHandler = require("../handlers/users/getUsersHandler")
const putUsersHandler = require("../handlers/users/putUsersHandler")
const deleteUsersHandler = require("../handlers/users/deleteUsersHandler");
const verifyToken = require("../middlewares/verifyToken");

const usersRouter = Router();

usersRouter.post("/", postUsersHandler);
usersRouter.get("/", verifyToken, getUsersHandler);
usersRouter.put("/:username", putUsersHandler);
usersRouter.delete("/:username", verifyToken, deleteUsersHandler);

module.exports = usersRouter;