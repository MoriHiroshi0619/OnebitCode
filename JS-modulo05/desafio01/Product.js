class Product {
    constructor(name, description, price){
        this.name = name;
        this.description = description;
        this.price = price;
        this.inStock = 0;
    }

    addStock(qtd){
        this.inStock += qtd;
    }

    calculateDiscount(per){
        let priceDiscounted = this.price - (this.price * (per / 100));
        console.log(`O preço final com desconto será = ${priceDiscounted}`);
    }
}

let bola = new Product('Bola', 'Bola de basquete', 145);

console.log(bola);

bola.addStock(30);
console.log(bola);

bola.calculateDiscount(15);