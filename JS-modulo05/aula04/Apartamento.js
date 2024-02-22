const Imovel = require("./Imovel");

class Apartamento extends Imovel{
    constructor(number, area, preco){
        super(area, preco);
        this.number = number;
    }

    getFloor(){
        return this.number.slice(0, -2);
    }
}

module.exports = Apartamento;