const { obterPessoas } = require("./service");

Array.prototype.meuReduce = function(callback, valorInicial) {
  let valorFinal = valorInicial;

  for (let index = 0; index <= this.length - 1; index++) {
    valorFinal =
      typeof valorFinal !== "undefined"
        ? callback(valorFinal, this[index], this)
        : callback(this[index], this[++index], this);
  }
  return valorFinal;
};

async function main() {
  try {
    const { results } = await obterPessoas("a");

    const alturas = results.map(item => parseInt(item.height));

    // exemplo 1 utilizando reduce()
    // const totalAltura = alturas.reduce((anterior, proximo) => {
    //   return anterior + proximo;
    // }, 0);

    const totalAltura = alturas.meuReduce((anterior, proximo) => {
      return anterior + proximo;
    }, 0);

    console.log("alturas", alturas);
    console.log("totalAltura", totalAltura);
  } catch (error) {
    console.error("error", error);
  }
}

main();
