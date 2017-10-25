var http = require('http');
var url = require('url');

//création du serveur
var server = http.createServer(function(req, res) {
	var page = url.parse(req.url).pathname;
	console.log(page);
	res.writeHead(200, {"Content-type": "text/plain"});
    
    if(page == '/') {
        res.write('Vous êtes à l\'accueil, puis-je vous aider ?');
    }
    else if
    res.end();
});
server.listen(8080);