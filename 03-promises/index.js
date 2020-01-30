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

obterUsuario()
  .then(function(usuario) {
    return obterTelefone(usuario.id).then(function(telefone) {
      return {
        usuario,
        telefone
      };
    });
  })
  .then(function(response) {
    return obterEndereco(response.usuario.id).then(function(endereco) {
      return {
        usuario: response.usuario,
        telefone: response.telefone,
        endereco
      }
    })
  })
  .then(function(response) {
    console.log(`
      Nome: ${response.usuario.nome}
      Endereço: ${response.endereco.rua}, ${response.endereco.numero}
      Telefone: (${response.telefone.ddd}) ${response.telefone.telefone}
    `);
  })
  .catch(function(error) {
    console.log(error);
  });
