//Classe do X: bi bi-x-lg
//Classe da Bola: bi bi-circle
let player1 = {
    nome: '',
    campos: []
};
let player2 = {
    nome: '',
    campos: []
};

let win;

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

function vitoria(turno, ganhador){
    todosCampos.forEach((e) => {
        e.removeEventListener('click', selecionado);
        e.classList.remove('player1hover');
        e.classList.remove('player2hover');
        e.classList.remove('error');
        if(win.includes(e.id)){
            if(turno == 1){
                e.classList.add('win1');
            }else{
                e.classList.add('win2');
            }
        }else{
            e.classList.remove('player1selected');
            e.classList.remove('player2selected');
            e.innerHTML = '';
        }
    }) 
    document.body.style.overflow = 'visible';
    const winDiv = document.getElementById('winDiv');
    winDiv.classList.add('appearDiv');

    const finalText = document.getElementById('textoFinal');
    console.log(ganhador);
    finalText.innerText = ganhador + ' Ganhou !!';

    document.getElementById('restartBtn').addEventListener('click', () => {
        location.reload()
    })
}

function jogar(){
    switch(turno){
        case 1:
            exibirNome(player1.nome);
            campoHover(turno);
            break;
        case 2:
            exibirNome(player2.nome);
            campoHover(turno);
            break;
    }
}

function exibirNome(nome){
    const playerTurnName = document.getElementById('playerName');
    playerTurnName.innerText = 'Turno: ' + nome;
    console.log(nome);
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
        player1.campos.push(campoSelecionado.id);
        if(verifica(player1.campos, winCases)){
            vitoria(turno, player1.nome);
            console.log(win);
            console.log('player1 venceu');
        }else{
            turno =  2;
            jogar();
        }
    }else{
        campoSelecionado.classList.add('player2selected');
        campoSelecionado.children.x.classList.add('show');
        campoSelecionado.classList.toggle('player2hover');
        player2.campos.push(campoSelecionado.id);
        if(verifica(player2.campos, winCases)){
            vitoria(turno, player2.nome);
            console.log('player2 venceu');
        }else{
            turno = 1;
            jogar();
        }
    }
}

function verifica(player, winCases) {
    let venceu = false;

    //console.log(winCases);
    winCases.forEach((winCase) => {
        //console.log(winCase);
        if(verificaItens(player, winCase)){
            venceu = true;
            win = winCase;
        }
    })
    //console.log(venceu);
    return venceu;
}

function verificaItens(arr1, arr2){
    let iguais = false;
    let count = 0;
    
    arr1.forEach( (e1) => {
        arr2.forEach( (e2) => {
            if(e1 === e2){
                count++;
                iguais = count >= 3 ? true : false;
            }
        })  
    })
    return iguais;
}
  
/* let ex1 = [
    ['1','2','3'],
    ['2', '5', '4']
];
let ex2 = ['1','6','2','4','5'];

if(verifica(ex2, ex1)){
    console.log('contem');
}
 
 */

const startBtn = document.getElementById('startGameBtn');

startBtn.addEventListener('click', (ev) => {
    ev.preventDefault();
    const player1name = document.getElementById('player1name').value;
    const player2name = document.getElementById('player2name').value;

    if(player1name.length != 0 && player2name.length != 0){
        document.getElementById('playerForm').remove();
        player1.nome = player1name;
        player2.nome = player2name;
        jogar();
    } else {
        alert('Por favor preencha os nomes do jogadores corretamente');
    }
})





























