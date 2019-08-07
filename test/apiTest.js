const request = require('supertest');
const app = require('../app');

// ----- categories API test -----
/**
 * Testing 'listAllCategories' endpoint
 */
describe('GET /categories', () => {
	it('responds with json containing list of all categories', (done) => {
		request(app)
			.get('/categories')
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200, done)
	});
});
/**
 * Testing 'listProductsByCategory' endpoint by giving an existing id
 */
describe('GET /categories/:id/products', () => {
	it('responds with json containing products from category id=2', (done) => {
		request(app)
			.get('/categories/2/products')
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200, done)
	});
});
/**
 * Testing 'listProductsByCategory' endpoint by giving a non-existing id
 */
describe('GET /categories/:id/products', () => {
	it('responds with error', (done) => {
		request(app)
			.get('/categories/22222/products')
			.set('Accept', 'application/json')
			.expect('Content-Type', /text/)
			.expect(500)
			.end((err) => {
				if (err) return done(err);
				done();
			});
	});
});
/**
 * Testing 'listProducts' endpoint
 */
describe('GET /products', () => {
	it('responds with json containing a list of 10 products', (done) => {
		request(app)
			.get('/products')
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200, done)
	});
});
/**
 * Testing 'listProductsByID' endpoint by giving an existing id
 */
describe('GET /products/:id', () => {
	it('responds with json containing product with id=5 ', (done) => {
		request(app)
			.get('/products/5')
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200, done)
	});
});
/**
 * Testing 'listProductsByID' endpoint by giving a non-existing id
 */
describe('GET /products/:id', () => {
	it('responds with error', (done) => {
		request(app)
			.get('/products/5555')
			.set('Accept', 'application/json')
			.expect(404)
			.end((err) => {
				if (err) return done(err);
				done();
			});
	});
});
