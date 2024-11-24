const database = require('./database'); // Importando a configuração do banco de dados
const colheita = require('./colheita'); // Importando o modelo Colheita
const { FOREIGNKEYS } = require('sequelize/lib/query-types');

//criando a tabela
const planta = database.sequelizeConfig.define(
    'planta', //nome tabela
    {
        nome:{
            type:database.sequelizeDb.STRING
        },
        data_plantio:{
            type:database.sequelizeDb.DATE
        },
        tipo:{
            type:database.sequelizeDb.STRING
        },
        quantidade:{
            type:database.sequelizeDb.INTEGER
        }
    }
)
/*
Não iremos criar os campos 'id_planta' e a chave estrangeira, pois o sequelize irá criar esses campos automaticamente,
ou seja, tanto a chave primária quanto chave estrangeira são criados pelo sequelize
*/


//definindo que uma planta pertence a varias colheitas, mas uma colheita pertence a uma só planta.
planta.hasMany(colheita,{
    onDelete:'CASCADE',
    onUpdate:'CASCADE'
})
colheita.belongsTo(planta, {
})  


planta.sync()
module.exports = planta