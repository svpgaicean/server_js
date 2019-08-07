function NotFound(msg) {
	this.name = 'NotFound';
	Error.call(this, msg);
	Error.captureStackTrace(this, arguments.callee);
}
NotFound.prototype.__proto__ = Error.prototype;

const errorHandler = (err, req, res, next) => {
	if (err instanceof NotFound) {
		res.status(404).json({});
	} else {
	next(err);
	}
}

module.exports = {
	NotFound,
	errorHandler
};
