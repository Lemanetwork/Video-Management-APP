const { Router } = require("express");
const postCommentsHandler = require("../handlers/comments/postCommentsHandler")

const commentsRouter = Router();

commentsRouter.post("/:UserId/:VideoId", postCommentsHandler);

module.exports = commentsRouter;