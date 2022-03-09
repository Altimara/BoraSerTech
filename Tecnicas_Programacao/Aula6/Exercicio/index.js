const http = require('http');
const beerRouter = require('./routes/beer-router');
const { fetchPokemon } = require('./helpers');
const URL = require('url');

const server = http.createServer();

server.on('request', async (req, res) => {
  const { method, url } = req;
  const { query } = URL.parse(req.url, true);

  if (url.startsWith('/poke')) {
    const pokemonName = await fetchPokemon(query.id);
    res.end(pokemonName);

  } else if (url.startsWith('/beer')) {
    beerRouter(req, res);

  } else {
    res.statusCode = 404;
    res.end('resource not found');
  }
});

server.listen(8080, () => {
  console.log(`escutando em http://localhost:8080`);
});

/* Este arquivo precisara no arquivo helpérs.js a pasta reouters que contem o arquivo beerrouters
  Para testar: no VS node .\index.js irá dar a mensagem " escutando em http://localhost:8080"
  acessar o postman > GET http://localhost:8080/poke?id=80  SEND
  imprimirá o nome do póKemon no 80: SLOWBRO
  OU digitar somente http://localhost:8080/poke imprimirá bulbasaur
  OU se digitar http://localhost:8080/ imprimirá resource not found
  ou se digitar http://localhost:8080/beer/ imprimirá method not implemented
  os dados serão consultados no https://pokeapi.co/
*/
