const { obterPessoas } = require("./service");

Array.prototype.meuFilter = function(callback) {
  const lista = [];
  for (index in this) {
    const item = this[index];
    const result = callback(item, index, this);

    if (!result) continue;
    lista.push(item);
  }

  return lista;
};

async function main() {
  try {
    const { results } = await obterPessoas("a");

    // exemplo 1 utilizando filter()
    // const familiaLars = results.filter(function(item) {
    //   return item.name.toLowerCase().indexOf("lars") !== -1;
    // });

    const familiaLars = results.meuFilter((item, index, lista) => {
      console.log(`index: ${index}`, lista.length);
      return item.name.toLowerCase().indexOf("lars") !== -1;
    });

    const names = familiaLars.map(({ name }) => name);

    console.log("names", names);
  } catch (error) {
    console.error("error", error);
  }
}

main();
