const categories = require('../categories.json');
const products = require('../products.json')

exports.list = (req, res) => {
	res = categories;
	console.log(res);
}

exports.id = (req, res) => {
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
	console.log(response);
}
