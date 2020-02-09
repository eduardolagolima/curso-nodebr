const service = require("./service");

Array.prototype.meuMap = function(callback) {
  const novoArrayMapeado = [];

  for (let index = 0; index <= this.length - 1; index++) {
    const result = callback(this[index], index);
    novoArrayMapeado.push(result);
  }

  return novoArrayMapeado;
};

async function main() {
  try {
    const result = await service.obterPessoas("a");
    
    // exemplo utilizando forEach()
    // const names = [];
    // result.results.forEach(function(item) {
    //   names.push(item.name);
    // });

    // exemplo 1 utilizando map()
    // const names = result.results.map(function(item) {
    //   return item.name;
    // });

    // exemplo 2 utilizando map()
    // const names = result.results.map(item => item.name);

    // exemplo 3 utilizando map()
    // const names = result.results.map( ({ name }) => name);

    // exemplo 4 utilizando meuMap()
    const names = result.results.meuMap(function(item, index) {
      return item.name;
    });

    console.log("names", names);
  } catch (error) {
    console.error("error", error);
  }
}

main();
