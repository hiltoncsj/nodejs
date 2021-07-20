var http = require("http");

http.createServer(function(requisicao, resposta){
    resposta.end("Bem vindo!");
}).lister(8181);