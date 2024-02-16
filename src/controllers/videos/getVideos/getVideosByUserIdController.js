const { Video } = require("../../../db");

const getVideosByUserIdController = async (userId, token) => {
    let videos = null;

    if (token) 
        videos = await Video.findAll({ where: { UserId: userId } });
    else 
        videos = await Video.findAll({ where: { UserId: userId, is_private: false } });

    if (videos.length === 0) throw new Error("There are no videos with this user id.");
    
    return videos;
}

module.exports = getVideosByUserIdController;
