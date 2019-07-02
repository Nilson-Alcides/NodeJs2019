class NotImplementedException extends Error{
    constructor() {
        super('Not Implemented Exception')
    }
}
class ICrud {
    create(item){
        throw new NotImplementedException()
    }

    read(query){
        throw new NotImplementedException()
    }

    update(id, item) {
        throw new NotImplementedException()
    }

    delete(id){
        throw new NotImplementedException()
    }
}

class MongoDb extends ICrud {
    constructor(){
        super()
    }
    create(item){
        console.log('o item foi salvo em MongoDB')
    }
}

class Postgres extends ICrud {
    constructor(){
        super()
    }
    create(item){
        console.log('o item foi salvo em Postgres')
    }
}

class contextStrategy {
    constructor(strategy){
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
}

const contextMongo = new contextStrategy(new MongoDb())
contextMongo.create()

const contextPostgres =  new contextStrategy(new Postgres())
contextPostgres.create()










