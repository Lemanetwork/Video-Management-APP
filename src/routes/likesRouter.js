const { Router } = require("express");
const postLikesHandler = require("../handlers/likes/postLikesHandler")

const likesRouter = Router();

likesRouter.post("/", postLikesHandler);

module.exports = likesRouter;