var Twitter = require('twitter');
var io = require('socket.io')(server);

var client = new Twitter ({
	consumer_key: 'Xo9mS4ImXETKSqYh3s5lTRUfb',
	consumer_secret: 'bDLsKI6VHBxqIU9I8KmBAIcmH59zmOSUWF5nQg418cpBcYYPPX',
	access_token_key: '771019559151087616-e4X6gV3JCLqHyh0DFJCDl0Wn0X9FnCf',
	access_token_secret: 'Z67gE78Ltx64O8pLwq3WGlbOiTJnoJSfI7Ng7ra7R5cp3'
});

// var params = {screen_name: 'nodejs'};
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
// 	if(!error) {
// 		console.log(tweets);
// 	}
// });

var server = http.createServer(function(req, res) {
	var page = url.parse(req.url).pathname;
	console.log(page);
	res.writeHead(200, {"Content-type": "text/plain"});
	res.end();
});


client.stream('statuses/filter', {track: 'javascript'}, function(stream) {
	stream.on('data', function(event) {
	  console.log(event && event.text);
	});
   
	stream.on('error', function(error) {
	  console.log(error);
	});
  });

