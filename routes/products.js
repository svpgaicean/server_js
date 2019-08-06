const products = require('../products.json');

exports.list = (req, res) => {
	res = products.slice(0, 10);
	console.log(res);	
}

exports.id = (req, res) => {
	let id = Number(req.params.id);
	res = products.filter(obj => obj.id === id);
	console.log(res);
}
