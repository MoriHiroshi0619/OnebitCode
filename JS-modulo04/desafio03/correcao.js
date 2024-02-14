/* -mostrar a idade atual
-sua proxima data de aniversario
-quantos dias faltam para o proximo aniversario */

const dayjs = require("dayjs");

function aniversario(date){
    const dataNasc = dayjs(date);
    const hoje = dayjs();

    const idade = hoje.diff(dataNasc, 'year');
    const proxNiver = dataNasc.add((idade + 1), 'year');
    const diasParaNiver = proxNiver.diff(hoje, 'day');

    console.log(`Idade: ${idade}`);
    console.log(`Proximo aniversario = ${proxNiver.format('DD/MM/YYYY')}`)
    console.log(`${diasParaNiver} dias para o proximo aniversario`);
}


aniversario('2001/06/2001');