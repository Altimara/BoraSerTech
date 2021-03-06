function randomNumberBetween(min = 2000, max = 7000) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  /*
  Criar função que que retorna uma Promise com um
  número aleatório após esperar x milisegundos
  (criar tempo de espera e número aleatório usando randomNumberBetween)
  */
  function randomNumberAsync() {
    const tempoDeEspera = randomNumberBetween();
    console.log(`vamos esperar ${tempoDeEspera} milisegundos!`);
  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const aleatorio = randomNumberBetween();
        console.log('numero aleatorio gerado', aleatorio);
  
        if (aleatorio < 3500) reject('numero muito baixo!');
        else resolve(aleatorio);
      }, tempoDeEspera);
    });
  }
  
  // chamar usando async
  (async () => {
    try {
      const aleatorio = await randomNumberAsync();
      console.log('valor da promise resolvido', aleatorio);
    } catch (err) {
      console.info('algo deu errado', err);
    }
  })();
  
  // chamar usando then/catch
  randomNumberAsync()
    .then((resultado) => {
      console.log(`[then/catch] then: ${resultado}, é maior que 3500, then é o resultado calculado`);
    })
    .catch((err) => {
      console.info(`[then/catch] catch: ${err}, é menor que 3500, catch quando da erro`);
    });
