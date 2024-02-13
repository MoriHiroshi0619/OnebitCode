import { switchTheme } from "./JS/theme.js";
import { cobyToClipBoard } from "./JS/copy.js";
import { calcular } from "./JS/calcular.js";

document.getElementById('themeSwitcher').addEventListener('click', switchTheme);

document.getElementById('copyToClipboard').addEventListener('click', cobyToClipBoard);

const input = document.getElementById('input');
const resultInput = document.getElementById('result');

const allowedKeys = ['(', ')', '/', '*', '+', '-', '.', '%', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ' '];

document.querySelectorAll('.charKey').forEach( (charkeybtn) => {
    charkeybtn.addEventListener('click', () => {
        const value = charkeybtn.dataset.value;
        input.value += value;
    });
});

document.getElementById('clear').addEventListener('click', () => {
    input.value = '';
    input.focus();
});

document.getElementById('equal').addEventListener('click', calcular)

input.addEventListener('keydown', (ev) => {
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
})






























