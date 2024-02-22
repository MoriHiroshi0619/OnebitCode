const Imovel = require("./Imovel");
const Casa = require("./Casa");
const Apartamento = require("./Apartamento");
const terreno = new Imovel(200, 50000);

const casa = new Casa(120, 200000);

const app = new Apartamento('201', 140, 400000);

console.log(terreno);
console.log(casa.obterPrecoPorMetroQuadrado());
console.log(casa instanceof Imovel);

console.log(app);
console.log(app.obterPrecoPorMetroQuadrado());
console.log(app.getFloor());