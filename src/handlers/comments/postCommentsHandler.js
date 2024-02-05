const postCommentsController = require("../../controllers/comments/postCommentsController");

const postCommentsHandler = async (req, res) => {
    const { UserId, VideoId } = req.params;
    const { comment } = req.body;

    if (!comment)
        return res.status(400).json({ error: "Please! Add a comment" });    
    try {
        const newComment = await postCommentsController(UserId, VideoId, comment);
        
        res.status(200).json(newComment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = postCommentsHandler;