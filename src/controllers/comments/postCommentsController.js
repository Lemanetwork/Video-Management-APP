const { Comment } = require("../../db");

const postCommentsController = async (UserId, VideoId, comment) => {
        const newComment = await Comment.create({ UserId, VideoId, comment });
        return newComment;
}

module.exports = postCommentsController;
