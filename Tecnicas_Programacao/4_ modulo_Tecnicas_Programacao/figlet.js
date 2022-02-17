const readline = require('readline');
const figlet = require('figlet');

function verificaidade(idade){
    return Number.parseInt(idade) >= 18;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Qual idade verificar? ', (idade) => {
    const msg = verificaidade(idade)? 'Maior de idade' : 'Menor de idade';

    figlet(msg, function(err, data){
        console.log(data);
        rl.close();
    });
});