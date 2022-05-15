function principal (): void{
    console.log("Executando")
}

principal();

//laços de repeticoes infinitos
//funções que retorna erro
function nuncaRetornaNada():never{
    //while(true){
  //  }

    throw new Error("Olá");
    
}

const a = nuncaRetornaNada();

