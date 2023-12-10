const { DataTypes, Model } = require('sequelize');


class tbl_usuario extends Model {
    static init(sequelize) {
        super.init({
            id_usuario: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            usuario: {
                type: DataTypes.STRING(40),
                allowNull: false
            },
            nome: {
                type: DataTypes.STRING,
                allowNull: false
            },
            senha: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'tbl_usuario',
            timestamps: false,
        });
    }
}

module.exports = tbl_usuario;