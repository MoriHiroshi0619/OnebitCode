let submit = document.getElementById('submit');


submit.addEventListener("click", ()=>{
    let pnome = document.getElementById('pnome');
    pnome = pnome.value;
    console.log(pnome);

    let unome = document.getElementById('unome');
    unome = unome.value;
    console.log(unome);

    let estudo = document.getElementById('estudo');
    estudo = estudo.value;
    console.log(estudo);

    let data = document.getElementById('data');
    data = data.value;
    console.log("data de nascimento = "  + data);
    dataAno = parseInt(data.slice(0, 4));
    console.log(dataAno);


    const date = new Date();
    const anoAtual = date.getFullYear();
    console.log("ano atual = "  + anoAtual);
    parseInt(anoAtual);

    let idade = anoAtual - dataAno;

    console.log("Idade do usuario = " + idade);

    
    event.preventDefault();
})