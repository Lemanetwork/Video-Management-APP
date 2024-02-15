const { Router } = require("express");
const usersRouter = require("../routes/usersRouter");
const videosRouter = require("../routes/videosRouter");
const commentsRouter = require("../routes/commentsRouter");
const likesRouter = require("../routes/likesRouter");
const authRouter = require("../routes/authRouter");

const mainRouter = Router();

mainRouter.use("/users", usersRouter);
mainRouter.use("/videos", videosRouter);
mainRouter.use("/comments", commentsRouter);
mainRouter.use("/likes", likesRouter);
mainRouter.use("/auth", authRouter);

module.exports = mainRouter;
