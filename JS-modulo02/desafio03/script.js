let opcao;
let imoveis = [];

do{
    let qtdImoveis = imoveis.length;
    opcao = prompt("Quantidade de imoveis salvos = " + qtdImoveis + "\nPor favor escolha um ação.\n1 - cadastrar novo imovel\n2 - Exibir todos os imoveis cadastrados\n3 - sair");

    switch(opcao){
        case '1':
            let nomeProprietario = prompt('Qual é o nome do proprietario?'); 
            let qtdQuartos = prompt('Quantos quartos o imovel possui ?');
            let qtdBanehiro = prompt('Quantos banheiros o imovel possui?');
            let garafem;
            do{
                garagem = prompt('Possui uma garafem ? [s]/[n]');
                if(garagem != 's' && garagem != 'n'){
                    alert("Por favor insira uma opção valida");
                }
            }while(garagem != 's' && garagem != 'n');
            imovel = {};
            imovel["proprietario"] = nomeProprietario;
            imovel["qtdBanheiro"] = qtdBanehiro;
            imovel["qtdQuarto"] = qtdQuartos;
            imovel["garagem"] = garagem;
            imoveis.push(imovel);
            break;
        case '2':
            let todosImoveis = " "
            imoveis.forEach((e, i) => {
                todosImoveis += "\n\n" + (i + 1) + "º imovel\nproprietario -> " + e.proprietario + "\nQuantidade de banheiro -> " + e.qtdBanheiro + "\nQuantidade de quartos -> " + e.qtdQuarto + "\nGaragem -> " + e.garagem;  
            });
            alert(todosImoveis);
            break;
        case '3':
            alert('Muito obrigado');
            break;
        default :
            alert("Por favor insira uma opção valida");
            break;
    }

}while(opcao != '3');