const { Sequelize } = require('sequelize');
const config = require('../config/index');

const sequelize = new Sequelize(config.db_name, config.db_user, config.db_pass, {
    host: "68.183.224.199",
    dialect: config.db_dialect,
    port: config.db_port
})

module.exports = sequelize;

//Code first

//yarn sequelize-cli init
//npm sequelize-cli init
//npx sequelize-cli init