const { Router } = require("express");
const postVideosHandler = require("../handlers/videos/postVideosHandler")
const getVideosHandler = require("../handlers/videos/getVideosHandler")
const putVideosHandler = require("../handlers/videos/putVideosHandler")
const deleteVideosHandler = require("../handlers/videos/deleteVideosHandler")
const verifyToken = require("../middlewares/verifyToken");
const validation = require("../middlewares/joiValidation");
const { uploadSchema } = require("../schemas/uploadSchema");

const videosRouter = Router();

videosRouter.post("/", verifyToken, validation(uploadSchema), postVideosHandler);
videosRouter.get("/", getVideosHandler);
videosRouter.get("/:id", getVideosHandler);
videosRouter.put("/:id", verifyToken, putVideosHandler);
videosRouter.delete("/:id", verifyToken, deleteVideosHandler);

module.exports = videosRouter;