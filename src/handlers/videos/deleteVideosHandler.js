const deleteVideosController = require("../../controllers/videos/deleteVideosController");

const deleteVideosHandler = async (req, res) => {
  const { id } = req.params;
  try {
      await deleteVideosController(id);
      res.status(204).json({ message: `Video with id ${id} was deleted successfully` });
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
}

module.exports = deleteVideosHandler;