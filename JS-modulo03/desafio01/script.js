function addJogador(){
    
    const teste = document.getElementById('form');

    if(!teste){
        const div = document.getElementById('divForm');
        
        const form = document.createElement('form');
        form.id = 'form';
        
        const posiLabel = document.createElement('label');
        posiLabel.setAttribute('for', 'posicao');
        posiLabel.innerText = "Informe a posicao do jogador: ";
        form.appendChild(posiLabel);
        const posiInput = document.createElement('input');
        posiInput.type = 'text';
        posiInput.id = 'posicao';
        posiInput.required = true;
        form.appendChild(posiInput);
    
        const nomeLabel = document.createElement('label');
        nomeLabel.setAttribute('for', 'nome');
        nomeLabel.innerText = "Informe o nome do jogador: ";
        form.appendChild(nomeLabel);
        const nomeInput = document.createElement('input');
        nomeInput.type = 'text';
        nomeInput.id = 'nome';
        nomeInput.required = true;
        form.appendChild(nomeInput);
    
        const numeroLabel = document.createElement('label');
        numeroLabel.setAttribute('for', 'numero');
        numeroLabel.innerText = "Informe o numero do jogador: ";
        form.appendChild(numeroLabel);
        const numeroInput = document.createElement('input');
        numeroInput.type = 'text';
        numeroInput.id = 'numero';
        numeroInput.required = true;
        form.appendChild(numeroInput);
    
        const escalarButton = document.createElement('button');
        escalarButton.innerText = 'Escalar';
        escalarButton.setAttribute('onclick', 'escalar(event)');
    
        const cancelarButton = document.createElement('button');
        cancelarButton.innerText = 'Cancelar';
        cancelarButton.setAttribute('onclick', 'removerForm(event)');
    
        form.append(escalarButton, cancelarButton);
    
        div.appendChild(form);
    }
    
}

function removerForm(event){
    event.preventDefault();
    const divForm = document.getElementById('divForm');
    const form = document.getElementById('form');
    divForm.removeChild(form);
}

function escalar(event){
    event.preventDefault();

    const confirm = window.confirm("Confirma a escalação?");

    if(confirm){
        const ul = document.getElementById('listaJogador');

        const li = document.createElement('li');
        li.className = 'li-jogador';

        let posicaoJogador = document.getElementById('posicao').value;

        let nomeJogador = document.getElementById('nome').value;

        let numeroJogador = document.getElementById('numero').value;

        if(posicaoJogador.length != 0 && nomeJogador.length != 0 && numeroJogador.length != 0){
            const posicaoDiv = document.createElement('div');
            posicaoDiv.className = 'posicao-div';
            posicaoDiv.innerText = 'Posição: ' + posicaoJogador;
            const nomeDiv = document.createElement('div');
            nomeDiv.className = 'nome-div';
            nomeDiv.innerText = 'Nome: ' + nomeJogador;
            const numeroDiv = document.createElement('div');
            numeroDiv.className = 'numero-div';
            numeroDiv.innerText = 'Número: ' + numeroJogador;
    
            li.append(posicaoDiv, nomeDiv, numeroDiv);
            li.id = numeroJogador;
            ul.appendChild(li);
    
            removerForm(event);
        }else{
            alert('Por facor preencha os campos corretamente');
            removerForm(event);
        }
    }
}

function removerJogador(){

    const teste = document.getElementById('form');
    if(!teste){
        const div = document.getElementById('divForm');
            
        const form = document.createElement('form');
        form.id = 'form';
    
        const numeroLabel = document.createElement('label');
        numeroLabel.setAttribute('for', 'numero');
        numeroLabel.innerText = "Informe o numero do jogador que deseja remover: ";
        form.appendChild(numeroLabel);
        const numeroInput = document.createElement('input');
        numeroInput.type = 'text';
        numeroInput.id = 'numero';
        numeroInput.required = true;
        form.appendChild(numeroInput);

        const removerButton = document.createElement('button');
        removerButton.innerText = 'remover';
        removerButton.setAttribute('onclick', 'remover(event)');
    
    
        const cancelarButton = document.createElement('button');
        cancelarButton.innerText = 'Cancelar';
        cancelarButton.setAttribute('onclick', 'removerForm(event)');

        form.append(removerButton, cancelarButton);
        div.appendChild(form);
    }
}

function remover(event){
    event.preventDefault();

    const confirm = window.confirm("Confirma a remoção?");
    if(confirm){
        let numeroJogador = document.getElementById('numero').value;
        const ul = document.getElementById('listaJogador');
        const removeLi = document.getElementById(numeroJogador);

        if(removeLi){
            ul.removeChild(removeLi);
        }else{
            alert('Por favor escolha um numero de camisa valido');
        }
    }
}



























