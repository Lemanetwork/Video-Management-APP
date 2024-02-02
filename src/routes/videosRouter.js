const { Router } = require("express");
const postVideosHandler = require("../handlers/videos/postVideosHandler")
const getVideosHandler = require("../handlers/videos/getVideosHandler")
const putVideosHandler = require("../handlers/videos/putVideosHandler")
const deleteVideosHandler = require("../handlers/videos/deleteVideosHandler")

const videosRouter = Router();

// videosRouter.post("/", postVideosHandler);
// videosRouter.get("/", getVideosHandler);
// videosRouter.put("/:id", putVideosHandler);
// videosRouter.delete("/:id", deleteVideosHandler);

module.exports = videosRouter;