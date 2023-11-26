const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const endereco = require('../models/enderecoModel');
const profissional = require('../models/profissionalModel');

const connection = new Sequelize(dbConfig);

endereco.init(connection);
profissional.init(connection);

profissional.associate(connection.models);

module.exports = connection;