function userLightTheme(){
    document.body.style.color = 'black';
    document.body.style.backgroundColor = 'white';
}

function userDarkTheme(){
    document.body.style.color = 'white';
    document.body.style.backgroundColor = 'black';
}


document.getElementById('lightButton').addEventListener('click', userLightTheme);

document.getElementById('darkButton').addEventListener('click', userDarkTheme);

const switchButton = document.getElementById('switchBtn');

switchButton.addEventListener('click', switchTheme);

function switchTheme(){
    document.body.classList.toggle('light');
    document.body.classList.toggle('dark');
}