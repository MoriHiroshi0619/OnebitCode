let opcao;
const pacientes = [];
do{
    let pa = "";
    pacientes.forEach((e, i) =>{
        pa += (i+1) + "º - " + e + "\n";
    });
    opcao = prompt(pa + "\nPor favor escolha uma ação\n1 - agendar consulta\n2 - consutar paciente \n3 - sair");
    console.log(opcao);
    switch(opcao){
        case "1":
            let paciente = prompt("Informe o Nome do Paciente");
            pacientes.push(paciente);
            console.log(pacientes);
            break;
        case "2":
            pacientes.shift();
            console.log(pacientes);
            break;
        case "3":
            alert("Obrigado");
            break;
        default:
            alert("Por favor insira uma opção válida");
            break;
    }
}while(opcao != 3);