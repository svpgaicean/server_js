/**
 * Module dependencies.
 */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const category = require('./routes/categories');
const product = require('./routes/products');
const categErr = require('./errors/categories');
const prodErr = require('./errors/products');

module.exports = app;

// Config
app.use(bodyParser.urlencoded({ extended: true }));

// Categories
app.get('/categories/', [
	categErr.handleError,
	category.list
]);
app.get('/categories/:id/products', [
	categErr.handleError,
	category.id
]);

// Products
app.get('/products/', [
	prodErr.handleError,
	product.list
]);
app.get('/products/:id', [
	prodErr.handleError,
	product.id
]);

if (!module.parent) {
	app.listen(5000);
	console.log('Express started on port 5000');
}
