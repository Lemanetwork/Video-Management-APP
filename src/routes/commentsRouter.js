const { Router } = require("express");
const postCommentsHandler = require("../handlers/comments/postCommentsHandler")
const getCommentsHandler = require("../handlers/comments/getCommentsHandler");
const verifyToken = require("../middlewares/verifyToken");

const commentsRouter = Router();

commentsRouter.post("/", verifyToken, postCommentsHandler);
commentsRouter.get("/", verifyToken, getCommentsHandler);

module.exports = commentsRouter;