/**
 * Module dependencies.
 */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const category = require('./routes/categories');
const product = require('./routes/products');

module.exports = app;

// Config
app.use(bodyParser.urlencoded({ extended: true }));

// Categories
app.get('/categories/', category.list);
app.get('/categories/:id/products', category.id);

// Products
app.get('/products/', product.list);
app.get('/products/:id', product.id);

if (!module.parent) {
	app.listen(5000);
	console.log('Express started on port 5000');
}
