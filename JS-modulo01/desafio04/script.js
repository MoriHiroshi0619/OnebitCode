const submit = document.getElementById('submit');

submit.addEventListener('click', () => {
    let p1nome = document.getElementById('p1nome').value;
    let p1ataque = parseInt(document.getElementById('p1ataque').value);

    let p2nome = document.getElementById('p2nome').value;
    let p2vida = parseInt(document.getElementById('p2vida').value);
    let p2defesa = parseInt(document.getElementById('p2defesa').value);
    let p2escudo = document.getElementById('p2escudo');

    console.log(p1ataque);
    console.log(p2defesa);

    if(p1ataque > p2defesa && !p2escudo.checked){
        let dano = p1ataque - p2defesa;
        console.log(p1nome + " atacou o " + p2nome);
        console.log("O dano causado foi de " + dano + " pontos");
        p2vida -= dano;
        console.log("Agora " + p2nome + " tem " + p2vida + " pontos de vida");
    }else if(p1ataque > p2defesa && p2escudo.checked){
        let dano = (p1ataque - p2defesa) / 2;
        console.log(p1nome + " atacou o " + p2nome);
        console.log("O dano causado foi de " + dano + " pontos");
        p2vida -= dano;
        console.log("Agora " + p2nome + " tem " + p2vida + " pontos de vida");
    } else if(p1ataque <= p2defesa){
        console.log("não houve dano nenhum")
    }
    event.preventDefault();
});