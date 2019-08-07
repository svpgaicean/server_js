const categories = require('../data/categories.json');
const products = require('../data/products.json');

const listAllCategories = (req, res) => {
	res.status(200).json({data: categories});
}

const listProductsByCategoryID = (req, res) => {
	let id = Number(req.params.id);
	let data = categories.filter(obj => obj.id === id);
	let ids = data[0].products;
	let response = [];

	for (let i = 0; i < products.length; i++) {
		for (let j = 0; j < ids.length; j++) {
			if (products[i].categories[j] === ids[j]) {
				response.push(products[i]);
			}
		}
	}
	if (response) {
		res.status(200).json({data: response});
		return;
	}
	else {
		res.status(404).json({error: 'not found'});
	}
}

module.exports = {
	listAllCategories,
	listProductsByCategoryID	
}
