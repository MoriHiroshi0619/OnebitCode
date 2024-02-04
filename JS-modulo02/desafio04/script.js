function areaTriangulo(base, altura){
    return base * altura / 2;
}

function areaRetangulo(base, altura){
    return base * altura;
}

function areaQuadrado(lado){
    return lado*lado;
}

function areaTrapezio(baseMaior, baseMenor, altura){
    return (baseMaior + baseMenor) * altura / 2;
}

function areaCirculo(raio){
    return 3.14 * (raio * raio);
}

let opcao;
do{
    opcao = prompt("Escolha uma opção\n1 - Calcular area do triangulo\n2 - Calcular area do retangulo\n3 - Calcular area do quadrado\n4 - Calcular area do trapezio\n5 - Calcular area do circulo\n6 - Sair");
    let base, altura, area, lado, baseMaior, baseMenor, raio;
    switch(opcao){
        case '1':
            base = parseFloat(prompt('Informe a base do triangulo'));
            altura = parseFloat(prompt('Informe a altura do triangulo'));
            area = areaTriangulo(base, altura);
            alert('A area do triangulo é = ' + area);
            break;
        case '2':
            base = parseFloat(prompt('Informe a base do retangulo'));
            altura = parseFloat(prompt('Informe a altura do retangulo'));
            area = areaRetangulo(base, altura); 
            alert('A area do retaungulo é = ' + area);
            break;
        case '3':
            lado = parseFloat(prompt('Informe o lado do quadrado'));
            area = areaQuadrado(lado);
            alert('A area do quadrado é = ' + area);
            break;
        case '4':
            baseMaior = parseFloat(prompt('Informe a base maior do trapezio'));
            baseMenor = parseFloat(prompt('Informe a base menor do trapezio'));
            altura = parseFloat(prompt('Informe a altura do trapezio'));
            area = areaTrapezio(baseMaior, baseMenor, altura);
            alert('A area do trapezio é = ' + area);
            break;
        case '5':
            raio = parseFloat(prompt('Informe o raio do circulo'));
            area = areaCirculo(raio);
            alert('A area do circulo é = ' + area);
            break;
        case '6':
            alert('Obrigado');
            break;
        default:
            alert('Por facor escolha uma opção valida');
            break;
    }

}while(opcao != 6);