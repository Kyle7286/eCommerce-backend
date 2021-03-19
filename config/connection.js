// For creating the DB  connection
const Sequelize = require('sequelize');
// For hiding sensitive information externally via .env
require('dotenv').config();


// Create DB connection with heroku support
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    dialectOptions: {
      decimalNumbers: true,
    },
  });

// Export the connection for use in server.js
module.exports = sequelize;
