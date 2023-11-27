'use strict';

const { QueryInterface, Sequelize } = require("sequelize");

module.exports = {
  up:  (QueryInterface, Sequelize) => {
     return QueryInterface.createTable('tbl_locacao', {
        id_locacao: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        dataInicio: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        dataTermino: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        valor_contrato: {
            type: Sequelize.DECIMAL(10,2),
            allowNull: false
        },
        periodo_aluguel: {
            type: Sequelize.STRING,
            allowNull: true
        },
        id_profissional: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: { model: 'tbl_profissional', key: 'id_profissional' },
          onUpdate: 'SET NULL',
          onDelete: 'SET NULL'
        },
        id_consultorio: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: { model: 'tbl_consultorio', key: 'id_consultorio' },
          onUpdate: 'SET NULL',
          onDelete: 'SET NULL'
        }
    });
  },

  down:  (QueryInterface, Sequelize) => {
    return QueryInterface.dropTable('tbl_locacao');
  },
};
