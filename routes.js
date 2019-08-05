const url = require('url');
let fs = require('fs');

html = {
	render(path, response, rcase, id) {
		fs.readFile(path, null, function(err, data) {
			if (err) {
				response.writeHead(404);
				response.write('file not found');
			}
			else {
				if (rcase === 1) {
					response.write(data);
				}
				else if (rcase === 2) {
					let adata = JSON.parse(data);
					let bdata = adata.slice(0,10);
					let cdata = JSON.stringify(bdata);
					response.write(cdata);
				}
				else if (rcase === 3) {
					let adata = JSON.parse(data);
					let bdata = adata.filter(obj => obj.id === id);
					let cdata = JSON.stringify(bdata);
					response.write(cdata);
				}
			}
			response.end();
		});
	}
}

module.exports = {
	handleRequest(request, response) {
		response.writeHead(200, {
			'Content-Type': 'application/json'
		});
	
		let path = url.parse(request.url).pathname;

		const rxCateg = /(^[\/]categories[\/]?$)/;
		const rxProd = /(^[\/]products[\/]?$)/;
		const rxProdId = /(^[\/]products[\/][0-9]+[\/]?$)/;

		const pathCateg = rxCateg.test(path) && path;
		const pathProd = rxProd.test(path) && path;
		const pathProdId = rxProdId.test(path) && path;

		let id;
		if (pathProdId) id = Number(pathProdId.match(/[0-9]+/)[0]);

		switch (path) {
			case pathCateg:
				html.render('./categories.json', response, 1);
				break;
			case pathProd:
				html.render('./products.json', response, 2);
				break;
			case pathProdId:
				html.render('./products.json', response, 3, id);
				break;
			default:
				response.writeHead(404);
				response.write('Route not found');
				response.end();
		}

		response.setHeader('Access-Control-Allow-Origin', '*');
	}
}
