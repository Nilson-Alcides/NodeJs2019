const ICrud = require('./interface/intefaceCrud')

class MongoDb extends ICrud {
    constructor(){
        super()
    }
    create(item){
        console.log('o item foi salvo em MongoDB')
    }
}

module.exports = MongoDb