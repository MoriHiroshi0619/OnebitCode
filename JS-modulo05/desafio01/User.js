class User {
    constructor(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password;
    }

    login(email, password){
        if(this.email === email && this.password === password){
            console.log("Login feito com sucesso");
        }else{
            console.log("Login incorreto");
        }
    }
}

let hiroshi = new User('Hiroshi', 'mori@gmail.com', '123');

console.log(hiroshi);

hiroshi.login('mori@gmail.com', 123);