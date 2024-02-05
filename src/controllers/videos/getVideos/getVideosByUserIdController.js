const { Video } = require("../../../db");

const getVideosByUserIdController = async (userId) => {

    const videos = await Video.findAll({ where: { UserId: userId } });
    
    if (!videos) throw Error(`There are not videos with this user id`);
    
    return videos;
}

module.exports = getVideosByUserIdController;
