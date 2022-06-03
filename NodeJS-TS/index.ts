//importação de bibliotecas
import { createServer , IncomingMessage, ServerResponse } from 'http';
import { parse } from 'query-string';
import * as url from 'url';
import { writeFile , readFile , unlink } from 'fs';


//Definicao de porta
const port = 5000;

const server = createServer( (request: IncomingMessage , response: ServerResponse ) =>{

    const urlparse = url.parse(request.url ? request.url : '' , true);
    
    var resposta;

     // Receber informacoes do usuario
    const params = parse(urlparse.search ? urlparse.search : '');

    // Criar um usuario -- Atualizar um usuario

  //pathname para pegar antes dos paramentos ? e depois da /;
  if(urlparse.pathname == '/criar-atualizar-usuario'){

    // Salvar as informacoes(JSON.stringify() Transforma o objeto em string)
   writeFile('users/'+ params.id +'.txt', JSON.stringify(params), function (err: any) {
       if (err) throw err;
       console.log('Saved!');
  
       resposta = 'usuario criado/atualizado com sucesso!';
  
       response.statusCode = 200;
       response.setHeader('Content-Type', 'text/plain');
       response.end(resposta);
    });
    }

  // Selecionar um usuario
else if(urlparse.pathname == '/selecionar-usuario'){

    readFile('users/'+ params.id +'.txt', function(err:any, data:any) {
      resposta = err ? 'usuario nao encontado' : data;
  
      response.statusCode = 200;
      response.setHeader('Content-Type', 'application/json');
      response.end(resposta);
    });
  }
   
  // Remover um usuario
  else if(urlparse.pathname == '/remover-usuario'){
  
    unlink('users/'+ params.id +'.txt', function (err:any) {
      console.log('File deleted!');
  
         resposta = err ? 'usuario nao encontado' : 'usuario removido com sucesso!';
  
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/plain');
      response.end(resposta);
  
    });
   
  }  
  
  });

//execução
server.listen(port, () => {

    console.log(`Server running on port ${port}`);
});