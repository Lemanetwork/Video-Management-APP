const { Video } = require("../../../db");

const getVideosByStatusController = async (is_private) => {
    const videos = await Video.findAll({ where: { is_private } });
    
    if (!videos) throw Error(`There are not videos with this status`);
    
    return videos;
}

module.exports = getVideosByStatusController;
