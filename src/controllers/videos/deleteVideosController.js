const { Video } = require("../../db");
const { validateId } = require("../../utils/validateVideo");

const deleteVideosController = async (id) => {
  const videoValidation = await validateId(id);

  if(videoValidation) await Video.destroy({ where: { id } });
  else throw Error("Video was no found")
}

module.exports = deleteVideosController;
