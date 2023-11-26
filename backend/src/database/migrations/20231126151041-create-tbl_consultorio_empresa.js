'use strict';

const { QueryInterface, Sequelize } = require("sequelize");

module.exports = {
  up:  (QueryInterface, Sequelize) => {
     return QueryInterface.createTable('tbl_consultorio_empresa', {
        id_consultorio_empresa: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        id_empresa: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: { model: 'tbl_empresa', key: 'id_empresa' },
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
    return QueryInterface.dropTable('tbl_consultorio_empresa');
  },
};
