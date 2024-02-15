const postVideosController = require("../../controllers/videos/postVideosController");

const postVideosHandler = async (req, res) => {
    const { title, description, url, credits, is_private } = req.body;
    const UserId = req.user.userId

    try {
        const newVideo = await postVideosController(title, description, url, credits, is_private, UserId);
        
        res.status(201).json(newVideo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = postVideosHandler;
