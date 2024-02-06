const validation = (schema) => {
    let joiValidation = async (req, res, next) => {
        try {
            const value = await schema.validateAsync(req.body, {abortEarly: false});
            next();
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    };

    return joiValidation;
};

module.exports = validation;