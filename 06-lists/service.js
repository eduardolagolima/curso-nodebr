const axios = require("axios");
const urlApi = "https://swapi.co/api/people";

async function obterPessoas(nome) {
  const response = await axios.get(`${urlApi}/?search=${nome}&format=json`);
  return response.data;
}

module.exports = {
  obterPessoas
};
