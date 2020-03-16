var url = require('url');
var adr = 'https://www.youtube.com/watch?v=2F0VSZHAC34';
var q = url.parse(adr,true);


console.log(q.host); //retorna o endereco principal
console.log(q.pathname); // retorna o caminho do endereco
console.log(q.search); // retorna a procura do endereco

var qdata = q.querry; // retorna um objeto: {ano, mes}
console.log(qdata.month);