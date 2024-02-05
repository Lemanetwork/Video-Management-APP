const postLikesController = require("../../controllers/likes/postLikesController");

const postLikesHandler = async (req, res) => {
    const { UserId, VideoId } = req.params;

    try {
        const newLike = await postLikesController(UserId, VideoId);
        
        res.status(200).json(newLike);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = postLikesHandler;
