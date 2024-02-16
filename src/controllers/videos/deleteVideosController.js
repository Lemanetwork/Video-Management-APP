const { Video } = require("../../db");
const { validateId } = require("../../utils/validateVideo");

const deleteVideosController = async (id) => {
  const videoValidation = await validateId(id);

  if(videoValidation) await Video.destroy({ where: { id } });
  else throw new Error("Video was not found")
}

module.exports = deleteVideosController;
