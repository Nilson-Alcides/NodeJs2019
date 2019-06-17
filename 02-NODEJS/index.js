/*
0 Obter um usuario
1 Obter o numero de telefone de usuario a partir de seu Id
2 Obter o nendereço do usuario pelo Id
*/

function obterUsuario(){
 setTimeout(function () {
 return{
    id: 1,
    nome: 'Nilton',
    dataNascimento: new Date()
 }
 }, 1000)
}

function obterTelefone(IdUsuario) {
    
}

function obterEndereco(IdUsuario) {
    
}
const usuario = obterUsuario()
const telefone = obterTelefone(usuario.id)      

console.log('usuario', usuario)
console.log('telefone', telefone)

