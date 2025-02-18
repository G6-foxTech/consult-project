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
            },
            email: {
                type: DataTypes.STRING(50),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'tbl_usuario',
            timestamps: false,
        });
    }

    static associate(models) {
        this.belongsTo(models.tbl_nivel_acesso , { foreignKey: 'id_nivel_acesso', as: 'fk_usuario_NivelACesso_1' });
    }
}

module.exports = tbl_usuario;