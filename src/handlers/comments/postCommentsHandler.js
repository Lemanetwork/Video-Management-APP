const postCommentsController = require("../../controllers/comments/postCommentsController");

const postCommentsHandler = async (req, res) => {
    const { VideoId, comment } = req.body;
    const UserId = req.user.userId

    try {
        const newComment = await postCommentsController(UserId, VideoId, comment);
        
        res.status(201).json(newComment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = postCommentsHandler;
