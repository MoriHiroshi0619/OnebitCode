import { calcular } from "./calcular.js";

const input = document.getElementById('input');

const allowedKeys = ['(', ')', '/', '*', '+', '-', '.', '%', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ' '];

function keyClicked(ev){
    const value = ev.currentTarget.dataset.value;
    input.value += value;
}

function clearKey(){
    input.value = '';
    input.focus();
}

function typing(ev){
    ev.preventDefault();
    if(allowedKeys.includes(ev.key)){
        input.value += ev.key;
        return
    }
    if(ev.key === 'Backspace'){
        input.value = input.value.slice(0, -1);
    }
    if(ev.key === 'Enter'){
        calcular();
    }
}

export {keyClicked, clearKey, typing}