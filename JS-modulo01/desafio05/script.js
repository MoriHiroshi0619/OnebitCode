const metros = parseFloat(prompt("Insiria a distancia em metros"));
const unidade = prompt("escolha a unidade de medida que deseja converter. [cm][mm][km]");

let valor;
switch (unidade) {
    case "cm": 
        valor = metros * 100;
        alert(metros + " metros é " + valor + " centimetros");
        break;
    case "mm": 
        valor = metros * 1000;
        alert(metros + " metros é " + valor + " milimitros");
        break;
    case "km": 
        valor = metros / 1000;
        alert(metros + " metros é " + valor + " kilometros");
        break;
    default:
        alert("por favor insira uma unidade valida");
        break;
}