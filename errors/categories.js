const categories = require('../categories.json');

exports.handleError = (req, res) => {
	try {
		res.status(200).json({categories});
	}
	catch (err) {
		res.status(404).send('Not found!');
	}
}
