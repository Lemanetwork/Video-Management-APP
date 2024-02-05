const { Like, User, Video } = require("../../db");

const postLikesController = async (UserId, VideoId) => {
    const user = await User.findByPk(UserId);
    if (!user) throw Error(`User was not found`);
    
    const video = await Video.findByPk(VideoId);
    if (!video) throw Error(`Video was not found`);

    const like = await Like.findOne({ where: { UserId, VideoId } });
    if (like) throw Error(`You already liked this video`);

    video.likes += 1;
    await video.save();

    await Like.create({ UserId, VideoId });

    return { message: "You liked the video" };
}

module.exports = postLikesController;
