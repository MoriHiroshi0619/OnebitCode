class Account{
    #password; //Atributos privatos
    #balance; //Atributos privatos
    constructor(user){
        this.email = user.email;
        this.#password = user.password;
        this.#balance = 0;
    }

    getBalance(){
        return this.#balance;
    }

}

const user = {
    email: '123@gmail.com',
    password: '123456'
}

const myAccount = new Account(user);

console.log(myAccount);


console.log(myAccount.getBalance());

