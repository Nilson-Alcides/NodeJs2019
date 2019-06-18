/*
0 Obter um usuario
1 Obter o numero de telefone de usuario a partir de seu Id
2 Obter o nendereço do usuario pelo Id
*/
// Importar módulo interno do node js
const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)
function obterUsuario(){
   // Quando der erro, problema -> reject(ERRO)
   // Quando der certo, sucesso -> resolve(sucesso)
   return new Promise(function resolvePromise(resolve, reject){
      setTimeout(function () {
         // return reject(new Error('Deu erro de verdade, agora perdemos todo projeto'))
      return resolve({
         id: 1,
         nome: 'Nilton',
         dataNascimento: new Date()
      })
      }, 1000)
   })
  }

  // adicionei o telefone 
  function obterTelefone(IdUsuario) {
     return new Promise(function resolvePromise(resolve,reject){
        setTimeout(() => {
           return resolve({
              telefone: 998985512,
              ddd: 11
            })
           }, 2000)
     })
   }
  
   // adicionei o Endereço
  function obterEndereco(IdUsuario, callback) {
     setTimeout(() => {
        return callback(null, {
           rua: 'Jose feliz',
           nunero: 10
         })
        }, 2000)
  }

  const usuarioPromise = obterUsuario()
  // Quando obter sucessos(manipular) usamos a funçaõ .then
  // Quando obter erros(manipular) usamos a funçaõ .catch
  usuarioPromise
      .then(function(usuario){
         return obterTelefone(usuario.id)
            .then(function resolverTelefone(result){
               return {
                  usuario: {
                     nome: usuario.nome,
                     id: usuario.id
                  },
                  telefone: result
               }
            })
      })
      .then(function(resultado) {
         const endereco = obterEnderecoAsync(resultado.usuario.id)
         return endereco.then(function resolveEndereco(result){
            return {
               usuario: resultado.usuario,
               telefone: resultado.telefone,
               endereco: result
            }
         })
      })
      .then(function(resultado){
         console.log(`
               Nome: ${resultado.usuario.nome}
               Endereco: ${resultado.endereco.rua}, ${resultado.endereco.nunero}
               Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
         
         `)
      })
      .catch(function(error){
         console.log('Deu erro ', error)
      })
    
//   obterUsuario(function resolverUsuario(error, usuario) {
//      // null || "" || 0 === false
//      if (error){
//         console.log('Erro ao pessquisar usuario, error')
//         return;
//      }
//      obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
//         if (error1){
//            console.log('Erro ao pessquisar telefone, error')
//            return;
//         }
//         obterEndereco(usuario.id, function resolveEndereco(error2, endereco){
//            if (error2){
//               console.log('Erro ao pessquisar endereco, error')
//               return;
//            }
//            console.log(`
//            Nome: ${usuario.nome},
//            Endereço: ${endereco.rua}, ${endereco.nunero}
//            Telefone: (${telefone.ddd}),  ${telefone.telefone}
//            `) 
//         })
  
//      })
//   })
