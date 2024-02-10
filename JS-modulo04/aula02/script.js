const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc'];

console.log(towns);
console.log(...towns);
console.log(...towns[0]);

/* const cidade = towns;

cidade.pop();
cidade.pop();
cidade.push('nagoya');
 */

const cidadeCopia = [...towns];

cidadeCopia.push('nagoya');

console.log({towns, cidadeCopia});

const cidadeObjeto = { ...towns};
const cidadeObjetoClone = {...cidadeObjeto};
cidadeObjetoClone.text = 'Ola mundo';

console.log({cidadeObjeto, cidadeObjetoClone});

