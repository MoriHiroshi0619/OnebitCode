let pessoa = {
    nome: 'Hiroshi',
    idade: 22,
    comprimentar(){
        console.log("Olá, mundo!\nMeu nome é " + this.nome);
    }
}
console.log(pessoa);

pessoa.comprimentar();