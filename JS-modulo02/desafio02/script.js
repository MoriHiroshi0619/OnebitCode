let opcao;
const baralho = [];
do{
    opcao = prompt("\nPor favor escolha uma ação\n1 - adicionar uma carta\n2 - puxar uma carta \n3 - sair");
    console.log(opcao);
    switch(opcao){
        case "1":
            let carta = prompt("Informe o nome da carta");
            baralho.push(carta);
            console.log(baralho);
            break;
        case "2":
            baralho.pop();
            console.log(baralho);
            break;
        case "3":
            alert("Obrigado");
            break;
        default:
            alert("Por favor insira uma opção válida");
            break;
    }
}while(opcao != 3);