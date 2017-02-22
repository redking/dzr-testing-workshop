const http = require('http');

let counter = 0;

console.log('Listening on 8080 ...');
const app = http.createServer(function(req, res) {
	console.log('Fetching user, count', ++counter);
	res.writeHead(200, {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
		'Content-Type': 'application/json'
	});
	res.end(JSON.stringify({ name: 'Cormac' }, null, 3));
});
app.listen(8080);
