const Joi = require('joi');

module.exports = {
    registerSchema: Joi.object({
        name: Joi.string()
            .alphanum()
            .min(2)
            .max(30)
            .required(),

        last_name: Joi.string()
            .alphanum()
            .min(2)
            .max(30)
            .required(),
    
        username: Joi.string()
            .alphanum()
            .min(2)
            .max(30)
            .required(),
    
        email: Joi.string()
            .email(),
    
        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{5,30}$')),
    })
};