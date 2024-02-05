const putVideosController = require("../../controllers/videos/putVideosController");

const putVideosHandler = async (req, res) => {
    const { id } = req.params;
    const newVideoData = req.body;
    
    try {
        const updatedVideo = await putVideosController(id, newVideoData);
        
        res.status(200).json(updatedVideo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = putVideosHandler;
