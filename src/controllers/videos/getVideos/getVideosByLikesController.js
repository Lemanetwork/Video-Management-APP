const { Video } = require("../../../db");

const getVideosByLikesController = async (likes, token) => {
    let videos = null;

    if (isNaN(likes))
        throw new Error("Please type the number of videos you would to display, sorted in ascending order by number of likes.");

    if (token)
        videos = await Video.findAll({ order: [['likes', 'DESC']] });
    else
        videos = await Video.findAll({ where: { is_private: false }, order: [['likes', 'DESC']] });

    if (!videos) throw new Error("There are no videos.");
    
    return videos.slice(0, likes);
}

module.exports = getVideosByLikesController;
