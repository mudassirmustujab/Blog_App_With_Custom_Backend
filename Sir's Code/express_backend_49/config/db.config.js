const {Sequelize} = require('sequelize');
require('dotenv').config()

const db_name = process.env.DB_NAME;
const db_host = process.env.DB_HOST;
const db_port = process.env.DB_PORT;
const db_dialect = process.env.DB_DIALECT;
const db_password = process.env.DB_PASSWORD;
const db_username = process.env.DB_USERNAME;

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(db_name, db_username, db_password, {
  host: db_host,
  dialect:db_dialect,
  port: db_port
});


module.exports = sequelize

