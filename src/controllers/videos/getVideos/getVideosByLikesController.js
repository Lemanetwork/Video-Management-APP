const { Video } = require("../../../db");

const getVideosByLikesController = async (likes, token) => {
    let videos = null;

    if (token)
        videos = await Video.findAll({ order: [['likes', 'DESC']] });
    else
        videos = await Video.findAll({ where: { is_private: false }, order: [['likes', 'DESC']] });

    if (!videos) throw new Error("There are not videos or they are private");
    
    if(!isNaN(likes))
        return videos.slice(0, likes);
    else
        return videos.slice(0, 5);
}

module.exports = getVideosByLikesController;
