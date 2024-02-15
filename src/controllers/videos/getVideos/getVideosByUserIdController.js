const { Video } = require("../../../db");

const getVideosByUserIdController = async (userId, token) => {
    let videos = null;

    if (token) 
        videos = await Video.findAll({ where: { UserId: userId } });
    else 
        videos = await Video.findAll({ where: { UserId: userId, is_private: false } });

    if (!videos) throw new Error("There are not videos with this user id or they are privete");
    
    return videos;
}

module.exports = getVideosByUserIdController;
