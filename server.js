var connect = require('connect');
var serveStatic = require('serve-static');

var app = connect();

app
	.use(serveStatic(__dirname, {'index': ['index.html']}))
	.use(function(req, res){
		res.setHeader("Access-Control-Allow-Origin", "http://example.com");
		res.end('hello world\n');
		}
	);
 
 app.listen(3000);