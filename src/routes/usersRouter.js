const { Router } = require("express");
const postUsersHandler = require("../handlers/users/postUsersHandler")
const getUsersHandler = require("../handlers/users/getUsersHandler")
const putUsersHandler = require("../handlers/users/putUsersHandler")
const deleteUsersHandler = require("../handlers/users/deleteUsersHandler")

const usersRouter = Router();

// usersRouter.post("/", postUsersHandler);
// usersRouter.get("/", getUsersHandler);
// usersRouter.put("/:usermame", putUsersHandler);
// usersRouter.delete("/:username", deleteUsersHandler);

module.exports = usersRouter;