const axios = require('axios');

async function fetchPokemon() {
  const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
  console.log({
    pokemonName: data.name,
  });
}

axios.post('/beer', {
  name: 'Heineken',
  abv: 5,
});
