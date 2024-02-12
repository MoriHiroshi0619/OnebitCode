function soma(...numeros){
    return numeros.reduce( (acumulador, num) => acumulador + num ,0)
}

console.log(soma(5, 4, 5));