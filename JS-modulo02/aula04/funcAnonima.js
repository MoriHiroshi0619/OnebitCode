function somar(a, b){
    return a + b;
}

let operacao = somar;

console.log(operacao(4,5));

operacao = function subtracao(a,b){
    return a - b;
}

console.log(operacao(10,4));

operacao = (a,b) => {
    return a * b;
}

console.log(operacao(5,5));
