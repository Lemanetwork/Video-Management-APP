const { Video } = require("../../../db");

const getVideosByIdController = async (id, token) => {
    let video = null;

    if (token)
        video = await Video.findByPk(id);
    else 
        video = await Video.findOne({ where: {id, is_private: false}});
    
    if (!video) throw new Error("Video was not found.");
    
    return video;
}

module.exports = getVideosByIdController;
