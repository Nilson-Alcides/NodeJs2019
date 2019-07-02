const ICrud = require('../interface/intefaceCrud') 

class contextStrategy extends ICrud {
    constructor(strategy){
        super()
        this._database = strategy
    }
    create(item){
        return this._database.create(item)
    }
    read(item){
        return this._database.read(item)
    }
    update(id, item){
        return this._database.update(id, item)
    }
    delete(id){
        return this._database.delete(id)
    }
    isConnected(){
        return this._database.isConnected()
    }
}

module.exports = contextStrategy