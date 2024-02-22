class Imovel {
    constructor(area, preco){
        this.area = area;
        this.preco = preco;
    }

    obterPrecoPorMetroQuadrado(){
        return this.preco / this.area;
    }
}

module.exports = Imovel;