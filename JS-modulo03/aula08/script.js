document.getElementById('sessionBtn').addEventListener('click', () =>{
    const input = document.getElementById('session');

    sessionStorage.setItem('info', input.value);
    input.value = ' ';
});

document.getElementById('readSession').addEventListener('click', () => {
    const info = sessionStorage.getItem('info');
    alert('A informação salva é ' + info);
});

document.getElementById('localBtn').addEventListener('click', () => {
    const input = document.getElementById('local');
    localStorage.setItem('text', input.value);

    input.value = '';
});

document.getElementById('readLocal').addEventListener('click', () => {
    const text = localStorage.getItem('text');
    alert('A informação salva é ' + text);
});

document.getElementById('cookieBtn').addEventListener('click', () => {
    const input = document.getElementById('cookie');
    console.log(input.value);
    //nomeCookie = value; expires=UTCstringDate; path=/

    const cookie = 'info=' + input.value + ';';
    const expiration = 'expires=' + new Date(2022,9,9) + ';';
    const path = 'path=/;'

    document.cookie = cookie + expiration + path;
    input.value = '';
});