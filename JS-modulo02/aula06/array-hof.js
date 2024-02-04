const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
];

//metodo map();

/* const nomes = [];

for (let i = 0; i < personagens.length; i++){
    nomes.push(personagens[i].nome);
} */

const nomes = personagens.map((personagem) => {
    return personagem.nome;
})

console.log(nomes);

//filter

const orcs = [];

for (let i = 0; i < personagens.length; i++){
    if(personagens[i].raca === 'Orc'){
        orcs.push(personagens[i]);
    }
} 

console.log(orcs);

const humanos = personagens.filter((personagem) => {
    return personagem.raca === 'Humano';
})

console.log(humanos);

// Reduce

const nivelTotal = personagens.reduce((nTotal, personagem) => {
    return nTotal + personagem.nivel;
}, 0);


console.log(nivelTotal);

const racas = personagens.reduce((a, personagem) => {
    if (a[personagem.raca]){
        a[personagem.raca].push(personagem)
    }else{
        a[personagem.raca] = [personagem]
    }

    return a;
}, {})

console.log(racas);

//sort()

personagens.sort((a, b) => {
    return b.nivel - a.nivel;
})

console.log(personagens);













