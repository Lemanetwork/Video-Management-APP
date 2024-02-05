const { Router } = require("express");
const postVideosHandler = require("../handlers/videos/postVideosHandler")
const getVideosHandler = require("../handlers/videos/getVideosHandler")
const putVideosHandler = require("../handlers/videos/putVideosHandler")
const deleteVideosHandler = require("../handlers/videos/deleteVideosHandler")
const verifyToken = require("../middlewares/verifyToken");

const videosRouter = Router();

videosRouter.post("/", verifyToken, postVideosHandler);
videosRouter.get("/", getVideosHandler);
videosRouter.get("/:id", getVideosHandler);
videosRouter.put("/:id", verifyToken, putVideosHandler);
videosRouter.delete("/:id", verifyToken, deleteVideosHandler);

module.exports = videosRouter;