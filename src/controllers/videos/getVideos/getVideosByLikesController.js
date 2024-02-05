const { Video } = require("../../../db");

const getVideosByLikesController = async (likes) => {

    const videos = await Video.findAll({ order: [['likes', 'DESC']] });

    if (!videos) throw Error(`There are not videos`);
    
    if(!isNaN(likes))
        return videos.slice(0, likes);
    else
        return videos.slice(0, 5);
}

module.exports = getVideosByLikesController;
