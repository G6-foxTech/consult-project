const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const endereco = require('../models/enderecoModel');
const profissional = require('../models/profissionalModel');
const empresa = require('../models/empresaModel');
const nivelAcesso = require('../models/nivelAcessoModel');
const usuario = require('../models/usuarioModel');
const consultorio = require('../models/consultorioModel');


const connection = new Sequelize(dbConfig);

endereco.init(connection);
profissional.init(connection);
empresa.init(connection);
usuario.init(connection);
nivelAcesso.init(connection);
consultorio.init(connection);

profissional.associate(connection.models);
empresa.associate(connection.models);
usuario.associate(connection.models);
consultorio.associate(connection.models);

module.exports = connection;