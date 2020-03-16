var http = require('http');
var uc = require('upper-case');
http.createServer(function(req,res) {
    res.writeContinue(200, {'Content-Typer': 'text/html'});
    res.write(uc.upperCase("Hello World!"));
    res.end();
}).listen(8080);