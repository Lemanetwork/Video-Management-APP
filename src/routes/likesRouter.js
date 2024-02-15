const { Router } = require("express");
const postLikesHandler = require("../handlers/likes/postLikesHandler");
const verifyToken = require("../middlewares/verifyToken");

const likesRouter = Router();

likesRouter.post("/", verifyToken, postLikesHandler);

module.exports = likesRouter;