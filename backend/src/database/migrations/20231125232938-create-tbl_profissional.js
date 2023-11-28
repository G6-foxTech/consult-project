'use strict';

const { QueryInterface, Sequelize } = require("sequelize");

module.exports = {
  up:  (QueryInterface, Sequelize) => {
     return QueryInterface.createTable('tbl_profissional', {
        id_profissional: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
        },
        nome: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        especialidade: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        formacao: {
            type: Sequelize.STRING(50),
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
        crm_crd_crp: {
            type: Sequelize.STRING(20),
            allowNull: false
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
    return QueryInterface.dropTable('tbl_profissional');
  },
};
