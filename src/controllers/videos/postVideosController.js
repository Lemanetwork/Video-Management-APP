const { Video } = require("../../db");
const { validateTitle } = require("../../utils/validateVideo");

const postVideoController = async (title, description, url, credits, publication_date, private, UserId) => {
    title = title.toLowerCase();
    
    const videoValidation = await validateTitle(title);

    if(!videoValidation) {
        const newVideo = await Video.create({ title, description, url, credits, publication_date, private, UserId });
        return newVideo
    } else throw Error("There is already a video with this title")
}

module.exports = postVideoController;
