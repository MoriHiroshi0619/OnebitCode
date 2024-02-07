const addTecButton = document.getElementById('addtec');

addTecButton.addEventListener('click', tecAppear);


function tecAppear(ev){
    ev.preventDefault();

    const tecDiv = document.getElementById('tecDiv');

    let allExpDiv = document.querySelectorAll('.exp-div');
    let totalExpDivCount = allExpDiv.length;

    const expDiv = document.createElement('div');
    expDiv.className = 'exp-div';
    
    const inputDiv1 = document.createElement('div');
    inputDiv1.className = 'input-div';
    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'tecname');
    nameLabel.innerText = 'Nome da tecnologia: ';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'tecname' + totalExpDivCount;

    inputDiv1.append(nameLabel, nameInput);
    expDiv.appendChild(inputDiv1);
    
    const pTecExp = document.createElement('p');
    pTecExp.innerText = 'Informe o tempo de experiência com a tecnologia'
    const labelRadio1 = document.createElement('label');
    labelRadio1.setAttribute('for', 'op1-' + totalExpDivCount);
    labelRadio1.innerText = "0-2anos";
    const inputRadio1 = document.createElement('input');
    inputRadio1.type = 'radio';
    inputRadio1.value = '0-2';
    inputRadio1.id = 'op1-' + totalExpDivCount;
    inputRadio1.name = 'exp-' + totalExpDivCount;
    inputRadio1.checked = true;
    const labelRadio2 = document.createElement('label');
    labelRadio2.setAttribute('for', 'op2-' + totalExpDivCount);
    labelRadio2.innerText = "2-4anos";
    const inputRadio2 = document.createElement('input');
    inputRadio2.type = 'radio';
    inputRadio2.value = '2-4';
    inputRadio2.id = 'op2-' + totalExpDivCount;
    inputRadio2.name = 'exp-' + totalExpDivCount;;
    const labelRadio3 = document.createElement('label');
    labelRadio3.setAttribute('for', 'op3-' + totalExpDivCount);
    labelRadio3.innerText = "+5anos";
    const inputRadio3 = document.createElement('input');
    inputRadio3.type = 'radio';
    inputRadio3.value = '+5';
    inputRadio3.id = 'op3-' + totalExpDivCount;
    inputRadio3.name = 'exp-' + totalExpDivCount;;
    const inputDiv2 = document.createElement('div');
    inputDiv2.className = 'input-div';

    inputDiv2.append(pTecExp,labelRadio1,inputRadio1, labelRadio2, inputRadio2, labelRadio3, inputRadio3);
    expDiv.appendChild(inputDiv2);
    
    const excluirButton = document.createElement('button');
    excluirButton.innerText = 'Excluir Experiencia';
    excluirButton.setAttribute('onclick', 'excluir(event, this.parentNode)');

    expDiv.appendChild(excluirButton);
    tecDiv.appendChild(expDiv);
}

function excluir(ev ,elements){ 
    ev.preventDefault();
    const divExcluir = elements;
    divExcluir.remove();
}







































