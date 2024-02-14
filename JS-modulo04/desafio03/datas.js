/* -mostrar a idade atual
-sua proxima data de aniversario
-quantos dias faltam para o proximo aniversario */

const dayjs = require("dayjs");

const dataNasc = dayjs('2001/06/19');


const hoje = dayjs();

const idade = hoje.diff(dataNasc, 'year');
const proxAniversario = dataNasc.add((idade + 1), 'year');

console.log(`Idade = ${idade} anos`)
console.log(`seu proximo aniversario é em ${proxAniversario.format('DD/MM/YYYY')}`)
console.log(`faltam ${proxAniversario.diff(hoje, 'day')} dias para o aniversario`)