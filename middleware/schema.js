const Joi = require('joi');

const getByIDSchema = Joi.object().keys({
	id: Joi.number().integer()
})

module.exports = { getByIDSchema };
