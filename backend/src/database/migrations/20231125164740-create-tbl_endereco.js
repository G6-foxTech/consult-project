'use strict';

const { QueryInterface, Sequelize } = require("sequelize");

module.exports = {
  up:  (QueryInterface, Sequelize) => {
     return QueryInterface.createTable('tbl_endereco', {
        id_endereco: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
        },
        numero: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        logradouro: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        bairro: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        cidade: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        complemento: {
            type: Sequelize.STRING,
            allowNull: true
        },
        cep: {
            type: Sequelize.STRING(9),
            allowNull: false
        },
        uf: {
            type: Sequelize.STRING(2),
            allowNull: false
        },
    });
  },

  down:  (QueryInterface, Sequelize) => {
    return QueryInterface.dropTable('tbl_endereco');
  },
};
