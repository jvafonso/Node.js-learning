var http = require('http');

//criar um objeto no servidor
http.createServer(function(req,res) {
    res.write('Hello World!'); //mostra uma resposta ao cliente
    res.end(); //fim da resposta
}).listen(8080);