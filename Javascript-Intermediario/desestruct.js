const pessoa = {
    nome : 'Bruno',
    sobrenome : 'Jacob',
    idade : 28,
    profissao : 'Back-End'
};
console.log(pessoa);

//let nome = pessoa.nome;
//let sobrenome = pessoa.sobrenome;
//let idade = pessoa.idade;
//let profissao = pessoa.profissao;

let {nome, sobrenome, idade, profissao} = pessoa;
console.log(nome, sobrenome, idade, profissao);