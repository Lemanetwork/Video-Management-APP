const { Router } = require("express");
const postCommentsHandler = require("../handlers/comments/postCommentsHandler")
const getCommentsHandler = require("../handlers/comments/getCommentsHandler");
const verifyToken = require("../middlewares/verifyToken");
const verifyOptionalToken = require("../middlewares/verifyOptionalToken");
const validation = require("../middlewares/joiValidation");
const { commentSchema } = require("../schemas/commentSchema");

const commentsRouter = Router();

commentsRouter.post("/", verifyToken, validation(commentSchema), postCommentsHandler);
commentsRouter.get("/", verifyOptionalToken, getCommentsHandler);

module.exports = commentsRouter;