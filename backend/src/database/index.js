const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const endereco = require('../models/enderecoModel');

const connection = new Sequelize(dbConfig);

endereco.init(connection);

module.exports = connection;