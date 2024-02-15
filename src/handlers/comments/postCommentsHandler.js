const postCommentsController = require("../../controllers/comments/postCommentsController");

const postCommentsHandler = async (req, res) => {
    const { UserId, VideoId, comment } = req.body;

    if (!comment)
        return res.status(400).json({ error: "Please! Add a comment" });    
    try {
        const newComment = await postCommentsController(UserId, VideoId, comment);
        
        res.status(201).json(newComment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = postCommentsHandler;
