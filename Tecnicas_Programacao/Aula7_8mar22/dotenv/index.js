/*Criar um arquivo .env e adicionar uma variável NOME
Criar um arquivo .js e imprimir essa variável
Criar variável de ambiente com export SOBRENOME=Wayne
Imprimir essa variável SOBRENOME
Sobrescrever SOBRENOME no dotenv e imprimir valor novo */

require('dotenv').config();

console.log(process.env.NOME, process.env.SOBRENOME); //Arquivo /.env ao executar o Index.js irá 
                                                    //mostrar as informações solicitadaa: 'Altimara Schmitz'

//console.log(process.env.CITY); //Arquivo variável do WINDOWS


const axios = require('axios').default;
//axios.get("https://www.youtube.com/watch?v=d7bKeG9hb-0")
//    .then(function(resposta){console.log(resposta.data); //retorna apenas os dados da API
//    });
//    axios.get("https://www.youtube.com/watch?v=d7bKeG9hb-0")
//    .then(function(resposta){console.log(resposta.headers); //retorna apenas os headers da API
//    });


//    axios.get("https://www.youtube.com/watch?v=d7bKeG9hb-0")
//    .then(function(resposta){console.log(resposta.status); //retorna apenas status da conexão do API, ex. 200
//    });    
require('dotenv').config();
const axios = require('axios').default;

axios.get(URL,{'Authorization': process.env.API_KEY});
