'use strict';

const { QueryInterface, Sequelize } = require("sequelize");

module.exports = {
  up:  (QueryInterface, Sequelize) => {
     return QueryInterface.createTable('tbl_usuario', {
        id_usuario: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
        },
        usuario: {
            type: Sequelize.STRING(40),
            allowNull: false
        },
        nome: {
            type: Sequelize.STRING,
            allowNull: false
        },
        senha: {
            type: Sequelize.STRING,
            allowNull: false
        },
       id_nivel_acesso: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'tbl_nivel_acesso', key: 'id_nivel_acesso' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
       }
    });
  },

  down:  (QueryInterface, Sequelize) => {
    return QueryInterface.dropTable('tbl_usuario');
  },
};
