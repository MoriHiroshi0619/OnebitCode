const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"];
console.log(arr);

//adicionar elementos

//push() adiciona no fim do array
arr.push("Boromir");
console.log(arr);

//unshift() andiciona no começo do array
arr.unshift("Hiroshi");
console.log(arr);

//remover elementos

//pop() retira no fim do array
arr.pop()
console.log(arr)

//shift() retira no começo do array

arr.shift()
console.log(arr);

//pesquisar por um elemento

//includes() retorna um booleano dizendo se está presente no array

const inclui = arr.includes('Gandalf');
console.log(inclui);

//indexOf() retorna o index do elemento pesuisado
const indice = arr.indexOf("Gandalf");
console.log(indice);

// cortar e concatenar
//slice()

const hobbits = arr.slice(0, 4);
const outros = arr.slice(-4);
console.log(hobbits)
console.log(outros);

//concat
const sociedade = hobbits.concat(outros, "Boromir");
console.log(sociedade);

// substituição dos Elementos
//splice
const elementosRemovidos = sociedade.splice(indice, 1, 'Gandalf, o Cinzento'); 
console.log(sociedade);
console.log(elementosRemovidos);

//iterar sobre os Elementos
sociedade.forEach((e) =>{
    console.log(e);
})














