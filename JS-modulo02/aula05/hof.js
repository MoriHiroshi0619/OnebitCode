// high order function é uma funcão que recebe outra função como parametro

function calcular(a, b, operacao){
    console.log("realizando uma operação");
    const resultado = operacao(a, b);
    return resultado;
}

function somar(x,y){
    console.log("realizando uma soma");
    return x + y;
}

console.log(calcular(4, 5, somar));

console.log(calcular(8, 5, (a, b) =>{
    console.log('realizando uma multiplicação')
    return a * b;
}))
