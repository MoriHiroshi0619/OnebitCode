const input = document.getElementById('input');
const resultInput = document.getElementById('result');
export function calcular(){
    resultInput.value = 'ERROR';
    resultInput.classList.add('error');
    const resultado = eval(input.value);
    resultInput.value = resultado;
    resultInput.classList.remove('error');
}
