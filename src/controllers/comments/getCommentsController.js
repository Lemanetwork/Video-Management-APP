const { Comment, Video } = require("../../db");

async function getCommentsController(token) {
    let allComments = null;
    
    if (token) {
        allComments = await Comment.findAll();
    }
    else {
        allComments = await Comment.findAll({
            include: [{
                model: Video,
                where: {
                    is_private: false
                },
                attributes: []
            }]
        });
    }
    
    if (allComments.length === 0) throw new Error("There are no comments");
    
    return allComments;
}

module.exports = getCommentsController;
