let estaAtivo: boolean;

//... trecho de codigo

estaAtivo = true;

function mapearStatusUsuario(status:boolean){
    if(status){
        return `Usuário está ativo!`
    }
    else{
        return `Usuario não está ativo!`
    }
}

mapearStatusUsuario(true);