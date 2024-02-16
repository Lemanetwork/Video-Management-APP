const getCommentsController = require("../../controllers/comments/getCommentsController");

const getCommentsHandler = async (req, res) => {
    let token = false;

    if (req.user) token = true;
        
    try {
        const allComments = await getCommentsController(token);

        res.status(200).json(allComments);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

module.exports = getCommentsHandler;