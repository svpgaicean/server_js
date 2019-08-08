let categories = require('../data/categories.json');
let products = require('../data/products.json');

const listAllCategories = (req, res) => {
	categories = require('../data/categories.json');
	let response = categories;
	res.status(200).json({data: response});
}

const listProductsByCategoryID = (req, res) => {
	categories = require('../data/categories.json');
	products = require('../data/products.json');
	let id = Number(req.params.id);
	let data = categories.filter(obj => obj.id === id);
	let data_subcateg = data[0].subcategories; // array of subcateg Objs
	let data_ids = data_subcateg.map(item => item.id);
	let response = [];

	products.forEach( product => {
		for (let i = 0; i < data_ids.length; i++) {
			if (product.subcategories.indexOf(data_ids[i]) >= 0) {
				response.push(product);
				break; // only push once (if it has more entries in the same categ)
			}
		}
	})

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
