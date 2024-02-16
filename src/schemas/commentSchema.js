const Joi = require('joi');

module.exports = {
    commentSchema: Joi.object({
        VideoId: Joi.string()
            .required(),

        comment: Joi.string()
            .min(5)
            .max(500)
            .required(),
    })
};