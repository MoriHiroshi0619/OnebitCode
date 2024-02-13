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

function moda(...numeros){
    let moda;
    let conjuntos = {
        elemento: [],
        repeticoes: []
    };
    numeros.forEach((n) => {
        if(conjuntos.elemento.includes(n)){
            conjuntos.repeticoes[conjuntos.elemento.indexOf(n)]++;
        }else{
            conjuntos.elemento.push(n);
            conjuntos.repeticoes[conjuntos.elemento.indexOf(n)] = 1;
        }
    });

    let maior = 0;
    conjuntos.repeticoes.forEach((n) => {
        if(n > maior){
            maior = n;
        }
    })
    moda = conjuntos.elemento[conjuntos.repeticoes.indexOf(maior)];
    console.log(conjuntos);
    return moda;
}

console.log(moda(1,1,5,4,9,7,4,3,5,2,4,0,4));