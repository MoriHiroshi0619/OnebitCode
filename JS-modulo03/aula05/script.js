function register(ev){
    console.log(ev)
    const sectionElement = ev.currentTarget.parentNode;

    const username = sectionElement.children.username.value;
    const senha = sectionElement.children.password.value;
    const senhaConfirm = sectionElement.children.passwordConfirm.value;

    console.log(username, senha, senhaConfirm);
}

const button = document.getElementById('register-button');

button.addEventListener('click', register);

function remove(){
    button.removeEventListener('click', register);
    alert('evento removido');
}