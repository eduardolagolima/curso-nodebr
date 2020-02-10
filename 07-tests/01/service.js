const { get } = require("axios");
const urlApi = "https://swapi.co/api/people";

async function obterPessoas(nome) {
  const response = await get(`${urlApi}/?search=${nome}&format=json`);
  return response.data.results.map(mapearPessoas);
}

function mapearPessoas(item) {
  return {
    nome: item.name,
    altura: item.height
  }
}

module.exports = {
  obterPessoas
};
