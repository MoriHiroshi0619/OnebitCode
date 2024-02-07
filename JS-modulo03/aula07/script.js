const input = document.getElementById('input');

document.getElementById('value').addEventListener('click', () => {
    input.value = input.value === '' ? 'Olá, mundo' : '';
})

document.getElementById('type').addEventListener('click', () => {
    input.type = input.type !== 'radio' ? 'radio' : 'text';
})

document.getElementById('placeholder').addEventListener('click', () => {
    input.placeholder = 'Digite algo'
})

document.getElementById('disable').addEventListener('click', () => {
    input.setAttribute('disabled', !input.disabled);
})

document.getElementById('disable').addEventListener('click', () => {
    input.setAttribute('disabled', !input.disabled);
})

document.getElementById('data').addEventListener('click', () => {
    const data = input.dataset.something;
    console.log(data);
    input.dataset.something = 'Pokemon é mo legal';
    console.log(data);
})