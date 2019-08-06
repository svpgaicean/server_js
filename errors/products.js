const products = require('../products.json');

exports.handleError = (req, res) => {
	try {
		res.status(200).json({products});
	}
	catch (err) {
		res.status(404).send('Not found!');
	}
}
