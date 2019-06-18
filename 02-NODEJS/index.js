/*
0 Obter um usuario
1 Obter o numero de telefone de usuario a partir de seu Id
2 Obter o nendereço do usuario pelo Id
*/

function obterUsuario(callback){
   setTimeout(function () {
   return callback(null, {
      id: 1,
      nome: 'Nilton',
      dataNascimento: new Date()
   })
   }, 1000)
  } 
  // adicionei o telefone 
  function obterTelefone(IdUsuario, callback) {
     setTimeout(() => {
        return callback(null, {
           telefone: 998985512,
           ddd: 11
         })
        }, 2000)
      
  }
  
  function obterEndereco(IdUsuario, callback) {
     setTimeout(() => {
        return callback(null, {
           rua: 'Jose feliz',
           nunero: 10
         })
        }, 2000)
  }
  function resolverUsuario(erro, usuario) {
     console.log('usuario', usuario)
  }
  
  obterUsuario(function resolverUsuario(error, usuario) {
     // null || "" || 0 === false
     if (error){
        console.log('Erro ao pessquisar usuario, error')
        return;
     }
     obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
        if (error1){
           console.log('Erro ao pessquisar telefone, error')
           return;
        }
        obterEndereco(usuario.id, function resolveEndereco(error2, endereco){
           if (error2){
              console.log('Erro ao pessquisar endereco, error')
              return;
           }
           console.log(`
           Nome: ${usuario.nome},
           Endereço: ${endereco.rua}, ${endereco.nunero}
           Telefone: (${telefone.ddd}),  ${telefone.telefone}
           `) 
        })
  
     })
  })

