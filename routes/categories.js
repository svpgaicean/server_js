const express = require('express');
const router = express.Router();
const { validatePathParams } = require('../middleware/lib');
const { getByIDSchema } = require('../middleware/schema');
const {
	listAllCategories,
	listProductsByCategoryID
} = require('../controllers/categories');

router.get('/categories/', listAllCategories);
router.get('/categories/:id/products', 
	validatePathParams(getByIDSchema),
	listProductsByCategoryID);

module.exports = router;
