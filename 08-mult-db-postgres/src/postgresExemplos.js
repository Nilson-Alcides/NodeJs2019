// npm install sequelize
// npm install pg-hstore pg
const Sequelize = require('Sequelize')
const Driver = new Sequelize(
    'heroes',
    'nilson',
    '361190', {
        host: 'localhost',
        dialect: 'postgres',
        quoteIdentifiers: false,
        operatorsAliases: false
    }
)
async function main() {
    const Herois = Driver.define('herois', {
        id:{
            type: Sequelize.INTEGER,
            require: true,
            primaryKey: true,
            autoIncrement: true
        },
        nome:{
            type: Sequelize.STRING,
            require: true
        },
        poder:{
            type: Sequelize.STRING,
            require: true
        }
    }, {
        tableName: 'TB_HEROIS',
        freezeTableName: false,
        timestamps: false
    })
    await Herois.sync()

    const result = await Herois.findAll({
        raw: true
    })
    console.log('result', result)
}
