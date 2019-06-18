const EventEmitter = require('eventes')
class MeuEmissor extends EventEmitter{

}
const meuEmissor = new MeuEmissor()
const nomeEvento = 'usuario:click'
meuEmissor.on(nomeEvento,function (click){
    console.log('um ususario clicou', click)
})