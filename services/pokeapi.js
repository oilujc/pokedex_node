const fetch = require("node-fetch");

async function getPokemons(limit = 20, offset = 0) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );

  /* Convierto la respuesta en json para que sea mas facil de interpretar */

  return await response.json();
}

module.exports = {
  getPokemons,
};
