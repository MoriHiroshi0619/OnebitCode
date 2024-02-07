const main = document.querySelector('main');
const root =document.querySelector(':root');
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

function calcular(){
    resultInput.value = 'ERROR';
    resultInput.classList.add('error');
    const resultado = eval(input.value);
    resultInput.value = resultado;
    resultInput.classList.remove('error');
}

document.getElementById('themeSwitcher').addEventListener('click', () => {
    if (main.dataset.theme === 'dark'){
        root.style.setProperty('--bg-color', '#f1f5f9');
        root.style.setProperty('--border-color', '#aaa');
        root.style.setProperty('--font-color', '#212529');
        root.style.setProperty('--primary-color', '#26834a');
        main.dataset.theme = 'light';
    }else {
        root.style.setProperty('--bg-color', '#212529');
        root.style.setProperty('--border-color', '#666');
        root.style.setProperty('--font-color', '#f1f5f9');
        root.style.setProperty('--primary-color', '#4dff91');
        main.dataset.theme = 'dark';
    }
});

document.getElementById('copyToClipboard').addEventListener('click', (ev) => {
    const button = ev.currentTarget;
    if(button.innerText === 'Copy'){
        button.innerText = 'Copied';
        button.classList.add('success');
        window.navigator.clipboard.writeText(resultInput.value); 
    }else{
        button.innerText = 'Copy';
        button.classList.remove('success');
    }
});




























