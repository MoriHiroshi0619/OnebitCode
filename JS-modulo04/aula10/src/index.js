function mediaSimples(...numeros){
    let media = 0;
    numeros.forEach((n) => media += n);
    media = media / numeros.length;
    return media;
}

console.log(mediaSimples(2,5,6,3,4));

function mediaPonderada(...numeros){
    let media = 0;
    numeros.forEach((num) => media += num?.n * num?.p);
    media = media / numeros.reduce((acumulador, n) => acumulador + n.p, 0);
    return media
}

console.log(mediaPonderada({n:7, p:2},{n:9, p:5},{n:3, p:1}));

function mediana(...numeros){
    let mediana;
    ordenado = [...numeros].sort((a,b) => a - b);
    if(ordenado.length % 2 == 0){
        mediana = (ordenado[Math.floor(ordenado.length / 2)] + ordenado[Math.floor(ordenado.length / 2) - 1]) / 2;
    }else{
        mediana = ordenado[Math.floor(ordenado.length / 2)];
    }
    return mediana;
}

console.log(mediana(2,4,5,7,42,99));

console.log(mediana(15,14,8,7,3));

function moda(...numbers){
    const quantidade = numbers.map( (num) => [
        num,
        numbers.filter( n => num === n).length
    ]);
    quantidade.sort((a,b) => b[1] - a[1]);
    return quantidade[0][0];
}

console.log(moda(1,1,5,4,9,7,4,3,5,2,4,0,4));



