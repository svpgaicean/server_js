const express = require('express');
const categoriesRouter = require('./routes/categories')
const productsRouter = require('./routes/products');
const bodyParser = require('body-parser');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', categoriesRouter);
app.use('/', productsRouter);

module.exports = app;
