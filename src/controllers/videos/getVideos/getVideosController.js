const { Video } = require("../../../db");

const getVideosController = async () => {
    const videos = await Video.findAll();
    
    if (videos.length === 0) throw Error("There are no videos");
    
    return videos;
}

module.exports = getVideosController;
