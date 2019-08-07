const products = require('../data/products.json');

const listProducts = (req, res) => {
	let response = products.slice(0, 10);
	if (response) {
		res.status(200).json({data: response});
		return;
	} 
	else {
		res.status(404).json({error: 'not found'});
	}
}

const listProductByID = (req, res) => {
	let id = Number(req.params.id);
	let response = products.filter(obj => obj.id === id);

	if (response.length) {
		res.status(200).json({data: response});
		return;
	} 
	else {
		res.status(404).json({error: 'not found'});
	}
}

module.exports = {
	listProducts,
	listProductByID
}
