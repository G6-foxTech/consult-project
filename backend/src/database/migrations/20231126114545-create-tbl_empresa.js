'use strict';

const { QueryInterface, Sequelize } = require("sequelize");

module.exports = {
  up:  (QueryInterface, Sequelize) => {
     return QueryInterface.createTable('tbl_empresa', {
        id_empresa: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        cnpj: {
            type: Sequelize.STRING(14),
            allowNull: false
        },
        razao_social: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        email: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        telefone: {
            type: Sequelize.STRING(20),
            allowNull: true
        },
        id_endereco: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: { model: 'tbl_endereco', key: 'id_endereco' },
          onUpdate: 'SET NULL',
          onDelete: 'SET NULL'
        }
    });
  },

  down:  (QueryInterface, Sequelize) => {
    return QueryInterface.dropTable('tbl_empresa');
  },
};
