const { Video } = require("../../db");
const { validateTitle, validateId } = require("../../utils/validateVideo");

const putVideoController = async (id, newVideoData) => {
    const videoValidation = await validateId(id);

    if (videoValidation) {
        if (newVideoData.title) {
            const titleValidation = await validateTitle(newVideoData.title);

            if (titleValidation)
                throw new Error("Title already exists");
        }
    } else throw new Error("Video does not exists");

    const updatedVideo = await Video.update(newVideoData, { where: { id }, returning: true });

    return updatedVideo;
}

module.exports = putVideoController;
