const { Video } = require("../db")

const validateTitle = async (title) => {
    const video = await Video.findOne({where: { title }});
    
    if (video !== null) return true;
    else return false;
}

const validateId = async (id) => {
    const video = await Video.findByPk(id);

    if (video !== null) return true;
    else return false;
}

module.exports = { validateTitle, validateId };