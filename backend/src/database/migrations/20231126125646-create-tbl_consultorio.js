'use strict';

const { QueryInterface, Sequelize } = require("sequelize");

module.exports = {
  up:  (QueryInterface, Sequelize) => {
     return QueryInterface.createTable('tbl_consultorio', {
        id_consultorio: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        nome: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        email: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        dias_disponiveis: {
            type: Sequelize.STRING,
            allowNull: false
        },
        horarios_disponiveis: {
            type: Sequelize.STRING,
            allowNull: false
        },
        telefone: {
          type: Sequelize.STRING(20),
          allowNull: false
        },
        numero_sala: {
          type: Sequelize.STRING(10),
          allowNull: false
        },
        tipo_sala: {
          type: Sequelize.STRING(10),
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
    return QueryInterface.dropTable('tbl_consultorio');
  },
};
