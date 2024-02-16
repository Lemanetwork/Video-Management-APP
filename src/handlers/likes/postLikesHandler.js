const postLikesController = require("../../controllers/likes/postLikesController");

const postLikesHandler = async (req, res) => {
    const { VideoId } = req.query;
    const UserId = req.user.userId

    try {
        const newLike = await postLikesController(UserId, VideoId);
        
        res.status(201).json(newLike);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = postLikesHandler;
