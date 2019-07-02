const contextStrategy = require('./db/strategies/base/contextStrategy')
const MongoDb = require('./db/strategies/mongodb')
const Postgres = require('./db/strategies/postegres')

const contextMongo = new contextStrategy(new MongoDb())
contextMongo.create()

const contextPostgres =  new contextStrategy(new Postgres())
contextPostgres.create()
