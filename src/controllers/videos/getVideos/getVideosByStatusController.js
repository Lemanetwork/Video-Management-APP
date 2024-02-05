const { Video } = require("../../../db");

const getVideosByStatusController = async (private) => {
    const videos = await Video.findAll({ where: { is_private: private } });
    
    if (!videos) throw Error(`There are not videos with this status`);
    
    return videos;
}

module.exports = getVideosByStatusController;
