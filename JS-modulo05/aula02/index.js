const Address = require("./Address");
const Person = require("./Person");

const addr = new Address('santa maria', '580', 'Magalhães', 'Londrina', 'MS');

const pessoa = new Person('Hiroshi', addr);

console.log(pessoa);
console.log(pessoa.endereco.fullAddress());