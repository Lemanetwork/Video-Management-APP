const postVideosController = require("../../controllers/videos/postVideosController");

const postVideosHandler = async (req, res) => {
    const { title, description, url, credits, publication_date, private, UserId } = req.body;

    if (!title || !description || !url || !credits || !publication_date || !private || !UserId)
        return res.status(400).json({ error: "We are missing some important information about the Video" });    
    try {
        const newVideo = await postVideosController(title, description, url, credits, publication_date, private, UserId);
        
        res.status(200).json(newVideo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = postVideosHandler;
