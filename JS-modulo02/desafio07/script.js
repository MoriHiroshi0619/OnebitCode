let vagas = [];
let opcao;

function listarVagas(vagas){
    if(vagas.length != 0){
        let a = ''; 
        vagas.forEach((e, i) => {
            a += '\n\n' + (i+1) + "º vaga\nNome -> " + e.nome + "\nQuantidade de candidatos -> " + e.qtd + "\nDescrição -> " + e.desc + "\nData limite -> " + e.data;
        })
        alert(a);
    }else{
        alert('Ainda não tem vagas cadastradas no sistema');
    }
}

function adicionarVaga(vagas){
    let vaga = {};
    let resposta;
    vaga['nome'] = prompt('Por favor informe um nome para essa vaga');
    vaga['desc'] = prompt('Por favor informe uma descrição dessa vaga');
    vaga['data'] = prompt('Por favor informe a data limite dessa vaga');
    vaga['qtd'] = Number(0);
    vaga['candidatos'] = [];
    do{
        resposta = prompt('Você confirma essa ação de adicionar a vaga? [s] / [n]')
    } while(resposta != 's' && resposta != 'n');
    if(resposta === 's'){
        vagas.push(vaga);
        alert('Vaga adicionada com sucesso');
    }else{
        alert('Ação exluida com sucesso');
    }
}

function inscreverCandidato(vagas){
    if(vagas.length != 0){
        let todasVagas = ''; 
        vagas.forEach( (e, i) => {
            todasVagas += "\nIndice da vaga -> " + (i + 1) + " | nome da vaga -> " + e.nome;
        });
        let indice;
        do{
            indice = parseInt(prompt(todasVagas + "\nPor favor escolha o indice da vaga desejada")) - 1;
        } while(indice >= vagas.length);
        let candidato = {};
        candidato["nome"] = prompt('Por favor informe o nome do candidato');
        candidato["idade"] = prompt('Por favor informe a idade do candidato');
        let resposta;
        do{
            resposta = prompt('Você confirma essa ação de se inscrever na vaga? [s] / [n]')
        } while(resposta != 's' && resposta != 'n');
        if(resposta === 's'){
            vagas[indice].qtd += 1;
            vagas[indice].candidatos.push(candidato);
            alert('candidato inscrito com sucesso');
        }else{
            alert('Ação excluida com sucesso');
        }
    }else{
        alert('Ainda não tem vagas cadastradas no sistema');
    }
}

function visualizarVaga(vagas){
    if(vagas.length != 0){
        let todasVagas = ''; 
        vagas.forEach( (e, i) => {
            todasVagas += "\nIndice da vaga -> " + (i + 1) + " | nome da vaga -> " + e.nome;
        });
        let todosCandidatos = '';
        let indice;
        do {
            indice = parseInt(prompt(todasVagas + "\nPor favor escolha o indice da vaga para visualizar")) - 1;
        }while(indice >= vagas.length);
        vagas[indice].candidatos.forEach( (e, i) => {
            todosCandidatos += "\n" + (i+1) + "º | Nome = " + e.nome + " | Idade = " + e.idade; 
        });
        alert('Nome da vaga -> ' + vagas[indice].nome + '\nDescrição da vaga -> ' + vagas[indice].desc + "\nData limite -> " + vagas[indice].data + "\nQuantidade de candidatos -> " + vagas[indice].qtd + todosCandidatos);
    }else{
        alert('Ainda não tem vagas cadastradas no sistema');
    }
}

function removerVaga(vagas){
    if(vagas.length != 0){
        let todasVagas = ''; 
        vagas.forEach( (e, i) => {
            todasVagas += "\nIndice da vaga -> " + (i + 1) + " | nome da vaga -> " + e.nome;
        });
        let indice;
        do {
            indice = parseInt(prompt(todasVagas + "\nPor favor escolha o indice da vaga para remover")) - 1;
        }while(indice >= vagas.length);
        let resposta;
        do{
            resposta = prompt('Você confirma essa ação de remover a vaga? [s] / [n]')
        } while(resposta != 's' && resposta != 'n');
        if(resposta === 's'){
            vagas.splice(indice, 1);
            alert('Vaga removida com sucesso');
        }else{
            alert('Ação excluida com sucesso');  
        }
    }else{
        alert('Ainda não tem vagas cadastradas no sistema');
    }
}

do {
    opcao = prompt("Por favor escolha uma ação a seguir\n1 - Listar vagas\n2 - criar uma nova vaga\n3 - visializar uma vaga\n4 - inscrever um candidato em uma vaga\n5 - Excluir uma vaga\n6 - sair");

    switch(opcao){
        case '1':
            listarVagas(vagas);
            break;
        case '2':
            adicionarVaga(vagas);
            break;
        case '3':
            visualizarVaga(vagas);
            break;
        case '4':
            inscreverCandidato(vagas);
            break;
        case '5':
            removerVaga(vagas);
            break;
        case '6':
            alert('Obrigado');
            break;
        default:
            alert('Por favor escolha uma opção valida');
            break;
    }

} while(opcao != '6');

















