const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: process.env.DB_STORAGE || './database.sqlite'
});

const Report = require('./Report')(sequelize);

const db = {
  Sequelize,
  sequelize,
  Report,
};

module.exports = db;
