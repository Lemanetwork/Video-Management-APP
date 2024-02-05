const { Video } = require("../../../db");

const getVideosByIdController = async (id) => {

    const video = await Video.findByPk(id);
    
    if (!video) throw Error(`Video was not found`);
    
    return video;
}

module.exports = getVideosByIdController;
