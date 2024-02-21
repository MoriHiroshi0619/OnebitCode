const Author = require("./Author.js");


let hiroshi = new Author('Anderson Hiroshi');
let carol = new Author('Caroline de gois');

console.log(hiroshi.criarPost('Quero Emprego', 'Estou desempegrado e Agora?'));

console.log(hiroshi.posts[0].addComentario(carol, 'Vai caçar trabalho vagabundo'));

console.log(hiroshi);


