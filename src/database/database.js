const { Sequelize } = require("sequelize");

const { DB_NAME, DB_USER, DB_PASS } = process.env;

const db = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  dialect: "sqlite",
  host: "./db.sqlite",
  logging: false,
});

module.exports = db;
