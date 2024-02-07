function register(element){
    console.log(element)

    const username = element.children.username.value;
    const senha = element.children.password.value;
    const senhaConfirm = element.children.passwordConfirm.value;

    console.log(username, senha, senhaConfirm);
}