const getVideosController = require("../../controllers/videos/getVideos/getVideosController");
const getVideosByIdController = require("../../controllers/videos/getVideos/getVideosByIdController");
const getVideosByUserIdController = require("../../controllers/videos/getVideos/getVideosByUserIdController");
const getVideosByStatusController = require("../../controllers/videos/getVideos/getVideosByStatusController");
const getVideosByLikesController = require("../../controllers/videos/getVideos/getVideosByLikesController");

const getVideosHandler = async (req, res) => {
    const { id, userId, is_private, likes } = req.query;
    let token = false;

    if (req.user) token = true;

    let videos = null;

    try {
        if (id) {
            videos = await getVideosByIdController(id, token);
        } else if (userId) { 
            videos = await getVideosByUserIdController(userId, token);
        } else if (is_private) {
            videos = await getVideosByStatusController(is_private, token);
        } else if (likes) { 
            videos = await getVideosByLikesController(likes, token);
        } else {
            videos = await getVideosController(token);
        }
        res.status(200).json(videos);
        
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

module.exports = getVideosHandler;