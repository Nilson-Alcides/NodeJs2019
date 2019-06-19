// Para iniciar o projeto node 
// Precisa dar um - npm imit ou npm init -y

const EventEmitter = require('events')
class MeuEmissor extends EventEmitter {

}
const meuEmissor = new MeuEmissor()
const nomeEvento = 'usuario:click'
meuEmissor.on(nomeEvento, function (click) {
    console.log('um ususario clicou', click)
})

// meuEmissor.emit(nomeEvento, 'na barra de rolagem')
// meuEmissor.emit(nomeEvento, 'no Ok')

// let count = 0
// setInterval( function (){
//     meuEmissor.emit(nomeEvento, 'no Ok' + (count++))
// }, 1000)

const stdin = process.openStdin()

function main() {
    return new Promise(function (resolve, reject) {
        stdin.addListener('data', function (value) {
            // console.log(`Voce digitou: ${value.toString().trim()}`)
            return resolve(value)
        })
    })
}
main().then(function(resutado){
    console.log('resultado', resutado.toString())
})