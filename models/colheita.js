const {sequelizeDb, sequelizeConfig} = require('./database')/*estamos utilizando o recurso de desestruturação de objetos
para importar a penas os módulos necessários*/

//criando tabela
const colheita = sequelizeConfig.define(
    'colheita',
    {
        
        data_colheita:{
            type:sequelizeDb.DATE
        },
        quantidade_colhida:{
            type:sequelizeDb.INTEGER
        }
    }
)

colheita.sync()
module.exports = colheita;