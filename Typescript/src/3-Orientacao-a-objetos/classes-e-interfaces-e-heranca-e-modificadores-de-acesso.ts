// Classes e Funções
//Static
class Usuario{
    public nome;
    public idade;

    constructor(nome:string, idade:number){
        this.nome = nome;
        this.idade = idade;
    }
}

class Player extends Usuario{
    public jogo;

    constructor(nome:string, idade:number, jogo:string){
        super(nome, idade);
        this.jogo = jogo;
    }

    dizerOJogoAtual(){
        return  `Estou jogando, no momento: ${this.jogo} `
    }

    static queHorasSao(){
        return Date();
    }
}

const jogador =  new Player('Anna', 28, 'Dota');
console.log(jogador.dizerOJogoAtual());
console.log(Player.queHorasSao());

// public, private, protected
//public : acessivel de forma geral, dentro e fora da classe.
//private: acessivel apenas dentro da classe onde foi criada.
//protected: acessivel dentro da classe e sub-classes.

class jogo {
    protected nome;
    // não funcionaria nas subsclasses
    //private nome;

    constructor(nome: string){
        this.nome = nome;
    }

    dizerNome(){
        return `o nome do jogo é : ${this.nome} `
    }
}

//class JogoComDescricao extends jogo{
//    private descricao;
//
//    constructor(nome:string, descicao:string){
//        super(nome);
//        this.descricao = descicao;
//    }

//    dizerNomeComDescicao(){
//        return `O jogo ${this.nome} é muito desafiador`
//    }
//}


//const dota = new JogoComDescricao('dota', 'jogo muito top')
//dota.nome = 'LOL'
//console.log(dota.dizerNome());
//console.log(dota.dizerNomeComDescicao());

// interface

interface IJogoComDescicao{
    dizerNomeComDescicao():String;
}
//implements
class JogoComDescricao extends jogo implements IJogoComDescicao{
    private descricao;

    constructor(nome:string, descicao:string){
        super(nome);
        this.descricao = descicao;
    }

    dizerNomeComDescicao(){
        return `O jogo ${this.nome} é muito desafiador`
    }
}
