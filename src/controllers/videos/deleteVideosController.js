const { Video } = require("../../db");

const deleteVideosController = async (id) => {
  await Video.destroy({ where: { id } });
}

module.exports = deleteVideosController;
