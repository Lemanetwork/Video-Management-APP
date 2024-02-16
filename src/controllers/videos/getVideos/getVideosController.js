const { Video } = require("../../../db");

const getVideosController = async (token) => {
    let videos = null;

    if (token)
        videos = await Video.findAll();
    else
        videos = await Video.findAll({ where: {is_private: false } });
    
    if (videos.length === 0) throw new Error("There are no videos.");
    
    return videos;
}

module.exports = getVideosController;
