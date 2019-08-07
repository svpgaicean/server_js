const validatePathParams = (schema) => (req, res, next) => {
	const result = schema.validate(req.params);
	if (result.error === null) next();
	else res.status(400).json({});
}

module.exports = { validatePathParams };
