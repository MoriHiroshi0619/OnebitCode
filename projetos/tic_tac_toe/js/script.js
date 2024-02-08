//Classe do X: bi bi-x-lg
//Classe da Bola: bi bi-circle
let player1 = {
    nome: 'Hiroahi',
    campos: []
};
let player2 = {
    nome: 'Anderson',
    campos: []
};

const winCases = [
    ['campo1-1' , 'campo1-2', 'campo1-3'],
    ['campo2-1' , 'campo2-2', 'campo2-3'],
    ['campo3-1' , 'campo3-2', 'campo3-3'],
    ['campo1-1' , 'campo2-1', 'campo3-1'],
    ['campo1-2' , 'campo2-2', 'campo3-2'],
    ['campo1-3' , 'campo2-3', 'campo3-3'],
    ['campo1-1' , 'campo2-2', 'campo3-3'],
    ['campo1-3' , 'campo2-2', 'campo3-1'],
]

let turno = 1;

const todosCampos = document.querySelectorAll('.campo');
todosCampos.forEach( (e) => {
    e.addEventListener('click', selecionado);
});

function jogar(){
    switch(turno){
        case 1:
            exibirNome(player1.nome);
            campoHover(turno);
            console.log(player1);
            break;
        case 2:
            exibirNome(player2.nome);
            campoHover(turno);
            console.log(player2);
            break;
    }
}

function exibirNome(nome){
    const playerTurnName = document.getElementById('playerName');
    playerTurnName.innerText = 'Turno: ' + nome;
    if(turno == 1){
        playerTurnName.classList.toggle('player1Turn');
        playerTurnName.classList.toggle('player2Turn');
    }else{
        playerTurnName.classList.toggle('player1Turn');
        playerTurnName.classList.toggle('player2Turn');
    }
}

function campoHover(turno){
    const camposAtivos = document.querySelectorAll('.campo');
    camposAtivos.forEach((e) => {
        if(e.dataset.ativo === 'true'){
            if(turno == 1){
                e.classList.toggle('player1hover');
                e.classList.toggle('player2hover');
                e.children.bola.classList.toggle('hide') ;
                e.children.x.classList.toggle('hide');
            }else{
                e.classList.toggle('player1hover');
                e.classList.toggle('player2hover');
                e.children.x.classList.toggle('hide');
                e.children.bola.classList.toggle('hide'); 
            }
        }
    })
    return;
}

function selecionado(ev){
    const campoSelecionado = ev.currentTarget;
    campoSelecionado.removeEventListener('click', selecionado);
    campoSelecionado.dataset.ativo = 'false';
    if(turno == 1){
        campoSelecionado.classList.add('player1selected');
        campoSelecionado.children.bola.classList.add('show');
        campoSelecionado.classList.toggle('player1hover');
        turno =  2;
        player1.campos.push(campoSelecionado.id);
        if(verifica(player1.campos, winCases)){
            console.log('player1 venceu');
        }else{
            jogar();
        }
    }else{
        campoSelecionado.classList.add('player2selected');
        campoSelecionado.children.x.classList.add('show');
        campoSelecionado.classList.toggle('player2hover');
        turno =  1;
        player2.campos.push(campoSelecionado.id);
        if(verifica(player2.campos, winCases)){
            console.log('player2 venceu');
        }else{
            jogar();
        }
    }
}



jogar();

function verifica(arr1, arr2) {
    let venceu = false;
    let count = 0;

    arr1.forEach( (e1) => {
        arr2.forEach( (e2) => {
            if(e1 === e2){
                count++;
            }
        })
    } );
    if(count >= 3){
        venceu = true;
    }
    console.log(count);
    return venceu;
}
  
/* let ex1 = ['1','4','2','10'];
let ex2 = ['1','5','2','3','9','4','10'];

if(verifica(ex1, ex2)){
    console.log('contem');
} */
 
/* const startBtn = document.getElementById('startGameBtn');

startBtn.addEventListener('click', (ev) => {
    ev.preventDefault();
    const player1name = document.getElementById('player1name').value;
    const player2name = document.getElementById('player2name').value;

    if(player1name.length != 0 && player2name.length != 0){
        document.getElementById('playerForm').remove();
        player1['nome'] = player1name;
        player2['nome'] = player2name;
    } else {
        alert('Por favor preencha os nomes do jogadores corretamente');
    }
    console.log(player1, player2)
}) */