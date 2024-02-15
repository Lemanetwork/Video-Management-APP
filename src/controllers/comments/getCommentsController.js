const { Comment } = require("../../db");

async function getCommentsController() {
    const allComments = await Comment.findAll();
    
    if (allComments.length === 0) throw new Error("There are no comments");
    
    return allComments;
}

module.exports = getCommentsController;
