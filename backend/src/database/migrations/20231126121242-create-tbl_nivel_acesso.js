'use strict';

const { QueryInterface, Sequelize } = require("sequelize");

module.exports = {
  up:  (QueryInterface, Sequelize) => {
     return QueryInterface.createTable('tbl_nivel_acesso', {
        id_nivel_acesso: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        nivel_acesso: {
            type: Sequelize.STRING(40),
            allowNull: false
        }
    });
  },

  down:  (QueryInterface, Sequelize) => {
    return QueryInterface.dropTable('tbl_nivel_acesso');
  },
};
