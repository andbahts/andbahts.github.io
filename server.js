const http = require('http');

const server = http.createServer(function(req, res) {
    console.log(`${req.method} ${req.url}`);
    res.end('what are you doing on my server, stupid faggot? get out, fucking idiot, you won\'t get my favicon.ico');
});

const port = 8080;
server.listen(port, function() {
console.log(`Server\'s running on port ${port}`);
});
