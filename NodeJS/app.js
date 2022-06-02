// Incluindo uma biblioteca
const http = require('http');
const url = require('url');
const queryString = require('query-string');
const fs = require('fs');

// Definição de endereço / URL
const hostname = '127.0.0.1'; // localhost
const port = 3000;

// Implementação da regra de negócio
const server = http.createServer((req, res) => {

let resposta;
const urlparse = url.parse(req.url, true);

 // Receber informacoes do usuario
 const params = queryString.parse(urlparse.search);

// Criar um usuario -- Atualizar um usuario

  //pathname para pegar antes dos paramentos ? e depois da /;
  if(urlparse.pathname == '/criar-atualizar-usuario'){

  // Salvar as informacoes(JSON.stringify() Transforma o objeto em string)
  fs.writeFile('users/'+ params.id +'.txt', JSON.stringify(params), function (err) {
     if (err) throw err;
     console.log('Saved!');

     resposta = 'usuario criado com sucesso!';

     res.statusCode = 200;
     res.setHeader('Content-Type', 'text/plain');
     res.end(resposta);
  });
  }

// Selecionar um usuario
else if(urlparse.pathname == '/selecionar-usuario'){

  fs.readFile('users/'+ params.id +'.txt', function(err, data) {
    resposta = err ? 'usuario nao encontado' : data;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(resposta);
  });
}
 
// Remover um usuario
else if(urlparse.pathname == '/remover-usuario'){

  fs.unlink('users/'+ params.id +'.txt', function (err) {
    console.log('File deleted!');

       resposta = err ? 'usuario nao encontado' : 'usuario removido com sucesso!';

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(resposta);

  });
 
}  

});

// Execução
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//http://127.0.0.1:3000/criar-atualizar-usuario?nome=BrunoJacob&idade=33&id=1
//http://127.0.0.1:3000/selecionar-usuario?id=1
//http://127.0.0.1:3000/remover-usuario?id=1