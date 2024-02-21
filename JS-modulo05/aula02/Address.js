class Address{
    constructor(rua, numero, bairro, cidade, estado){
        this.rua = rua;
        this.numero = numero;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    fullAddress(){
        return `Rua: ${this.rua}, nº: ${this.numero}, Bairro: ${this.bairro}, Cidade: ${this.cidade}, Estado: ${this.estado}`
    }
}

module.exports = Address;