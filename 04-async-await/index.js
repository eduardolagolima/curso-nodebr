/*
0: Obter o usuário
1: Obter o número do telefone do usuário pelo ID
2: Obter o endereço do usuário pelo ID
*/

function obterUsuario() {
  return new Promise(function(resolve, reject) {
    // return reject(new Error("erro em usuário"));
    setTimeout(function() {
      return resolve({
        id: 1,
        nome: "Aladin",
        dataNascimento: new Date()
      });
    }, 500);
  });
}

function obterTelefone(idUsuario) {
  return new Promise(function(resolve, reject) {
    // return reject(new Error("erro em telefone"));
    setTimeout(() => {
      return resolve({
        telefone: "1199002",
        ddd: 11
      });
    }, 1000);
  });
}

function obterEndereco(idUsuario) {
  return new Promise(function(resolve, reject) {
    // return reject(new Error("erro em endereço"));
    setTimeout(() => {
      return resolve({
        rua: "dos bobos",
        numero: 0
      });
    }, 1000);
  });
}

main();

async function main() {
  try {
    const usuario = await obterUsuario();

    const [telefone, endereco] = await Promise.all([
      obterTelefone(usuario.id),
      obterEndereco(usuario.id)
    ]);

    console.log(`
      Nome: ${usuario.nome}
      Telefone: (${telefone.ddd}) ${telefone.telefone}
      Endereço: ${endereco.rua}, ${endereco.numero}
    `);
  } catch (error) {
    console.error(error);
  }
}
