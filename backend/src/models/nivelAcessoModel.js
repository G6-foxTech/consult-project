const { DataTypes, Model } = require('sequelize');

class tbl_nivel_acesso extends Model {
    static init(sequelize) {
        super.init({
            id_nivel_acesso: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nivel_acesso: {
                type: DataTypes.STRING(10),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'tbl_nivel_acesso',
            timestamps: false,
        });
    }
}

module.exports = tbl_nivel_acesso;