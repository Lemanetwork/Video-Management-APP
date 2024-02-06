const getVideosController = require("../../controllers/videos/getVideos/getVideosController");
const getVideosByIdController = require("../../controllers/videos/getVideos/getVideosByIdController");
const getVideosByUserIdController = require("../../controllers/videos/getVideos/getVideosByUserIdController");
const getVideosByStatusController = require("../../controllers/videos/getVideos/getVideosByStatusController");
const getVideosByLikesController = require("../../controllers/videos/getVideos/getVideosByLikesController");

const getVideosHandler = async (req, res) => {
    const { id } = req.params;
    const { userId, is_private, likes } = req.query
    
    let videos;

    try {
        if (id) {
            videos = await getVideosByIdController(id);
        } else if (userId) { 
            videos = await getVideosByUserIdController(userId);
        } else if (is_private) {
            videos = await getVideosByStatusController(is_private);
        } else if (likes) { 
            videos = await getVideosByLikesController(likes);
        } else {
            videos = await getVideosController();
        }
        res.status(200).json(videos);
        
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = getVideosHandler;