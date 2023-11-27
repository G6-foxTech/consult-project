const { DataTypes, Model } = require('sequelize');


class tbl_empresa extends Model {
    static init(sequelize) {
        super.init({
            id_empresa: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            cnpj: {
                type: DataTypes.STRING(14),
                allowNull: false
            },
            razao_social: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            email: {
                type: DataTypes.STRING(50),
                allowNull: false
            },
            telefone: {
                type: DataTypes.STRING(20),
                allowNull: false
            },
            senha: {
                type: DataTypes.STRING,
                allowNull: false
            },
            id_endereco: {
                type: DataTypes.INTEGER,
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'tbl_empresa',
            timestamps: false,
        });
    }

    static associate(models) {
        this.belongsTo(models.tbl_endereco , { foreignKey: 'id_endereco', as: 'fk_empresa_endereco_1' });
    }
}

module.exports = tbl_empresa;