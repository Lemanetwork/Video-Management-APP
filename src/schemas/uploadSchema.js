const Joi = require('joi');

module.exports = {
    uploadSchema: Joi.object({
        title: Joi.string()
            .min(5)
            .max(500)
            .required(),

        description: Joi.string()
            .min(5)
            .max(500)
            .required(),
    
        url: Joi.string()
            .uri()
            .min(2)
            .max(1000)
            .required(),

        credits: Joi.string()
            .min(5)
            .max(500)
            .required(),
        
        likes: Joi.number(),
        
        is_private: Joi.boolean()
            .required(),
    })
};