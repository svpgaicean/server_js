const app = require('../app');
const https = require('https');
const fs = require('fs');
const port = 5000;

const server = https.createServer({
	key: fs.readFileSync('server.key'),
	cert: fs.readFileSync('server.cert')
}, app);

if (!module.parent) {
	server.listen(port);
	console.log(`Express started on port ${port}`);
}
