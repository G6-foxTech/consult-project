const { DataTypes, Model } = require('sequelize');


class tbl_consultorio_empresa extends Model {
    static init(sequelize) {
        super.init({
            id_consultorio_empresa: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            id_empresa: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            id_consultorio: {
                type: DataTypes.INTEGER,
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'tbl_consultorio_empresa',
            timestamps: false,
        });
    }

    static associate(models) {
        this.belongsTo(models.tbl_empresa , { foreignKey: 'id_empresa', as: 'fk_consultorio_empresa_1' });
        this.belongsTo(models.tbl_consultorio , { foreignKey: 'id_consultorio', as: 'fk_consultorio_empresa_2' });
    }
}

module.exports = tbl_consultorio_empresa;