const getCommentsController = require("../../controllers/comments/getCommentsController");

const getCommentsHandler = async (req, res) => {    
    try {
        const allComments = await getCommentsController();

        res.status(200).json(allComments);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

module.exports = getCommentsHandler;