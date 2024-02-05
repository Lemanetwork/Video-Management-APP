const { Router } = require("express");
const postLikesHandler = require("../handlers/likes/postLikesHandler")

const likesRouter = Router();

likesRouter.post("/:UserId/:VideoId", postLikesHandler);

module.exports = likesRouter;