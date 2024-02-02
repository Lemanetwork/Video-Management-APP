const { Router } = require("express");
const usersRouter = require("../routes/usersRouter");
const videosRouter = require("../routes/videosRouter");

const mainRouter = Router();

mainRouter.use("/users", usersRouter);
mainRouter.use("/videos", videosRouter);

module.exports = mainRouter;
