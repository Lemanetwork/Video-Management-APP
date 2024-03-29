const { Like, User, Video } = require("../../db");

const postLikesController = async (UserId, VideoId) => {
    const user = await User.findByPk(UserId);
    if (!user) throw new Error(`User was not found`);
    
    const video = await Video.findByPk(VideoId);
    if (!video) throw new Error(`Video was not found`);

    const like = await Like.findOne({ where: { UserId, VideoId } });
    if (like) throw new Error(`You already liked this video`);

    video.likes += 1;
    await video.save();

    const newLike = await Like.create({ UserId, VideoId });

    return newLike;
}

module.exports = postLikesController;
