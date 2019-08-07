const express = require('express');
const router = express.Router();
const { validatePathParams } = require('../middleware/lib');
const { getByIDSchema } = require('../middleware/schema');
const {
	listProducts,
	listProductByID
} = require('../controllers/products');

router.get('/products/', listProducts);
router.get('/products/:id', 
	validatePathParams(getByIDSchema),
	listProductByID);

module.exports = router;
