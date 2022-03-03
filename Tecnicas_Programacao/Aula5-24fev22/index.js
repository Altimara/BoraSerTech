const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  res.write('Usando o Visual Studio, chama no Postman "http://localhost:8080" abrindo do Chrome ');
  res.end();
});

server.listen(8080, () => {
  console.log(`escutando em http://localhost:8080`);
});
