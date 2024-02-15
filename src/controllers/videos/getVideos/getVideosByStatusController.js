const { Video } = require("../../../db");

const getVideosByStatusController = async (is_private, token) => {
    let videos = null;

    if (token)
        videos = await Video.findAll({ where: { is_private } });
    else if (is_private === "false")
        videos = await Video.findAll({ where: { is_private: false } });
    
    if (!videos) throw new Error("There are not videos with this status or the video status is private");
    
    return videos;
}

module.exports = getVideosByStatusController;
