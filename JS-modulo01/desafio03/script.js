const submit = document.getElementById('submit');

submit.addEventListener('click', () => {
    let carName01 = document.getElementById('carName01').value;
    let carVel01 = parseInt(document.getElementById('carVel01').value);

    let carName02 = document.getElementById('carName02').value;
    let carVel02 = parseInt(document.getElementById('carVel02').value);

    if(carVel01 > carVel02){
        console.log(carName01 + " é o carro mais rapido");
    } else if(carVel01 === carVel02){
        console.log("Os dois estão na mesma velocidade");
    }else{
        console.log(carName02 + " é o carro mais rapido");
    }

    event.preventDefault();
})