const person = {
    nome: 'Hiroshi',
    job: 'Dev',
    parents: ['Aparecido', 'Maria']
}

const name = person.nome;

const {job, parents} = person;

console.log(`O name = ${name} e o job = ${job} familiares = ${parents}`);

const [father, mother] = parents;

console.log(father, mother);

function createUser({nome, job, parents}){
    const id = Math.floor(Math.random() * 9999);
    return {
        id,
        nome,
        job,
        parents 
    }
}

const luke = createUser(person);

console.log(luke);