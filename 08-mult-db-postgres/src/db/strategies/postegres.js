const ICrud = require('./interface/intefaceCrud')

class Postgres extends ICrud {
    constructor(){
        super()
    }
    isConnected(){
        
    }
    create(item){
        console.log('o item foi salvo em Postgres')
    }
}

module.exports = Postgres