const { DataTypes, Model } = require('sequelize');


class tbl_profissional extends Model {
    static init(sequelize) {
        super.init({
            id_profissional: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            especialidade: {
                type: DataTypes.STRING(50),
                allowNull: false
            },
            formacao: {
                type: DataTypes.STRING(50),
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
            crm_crd_crp: {
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
            tableName: 'tbl_profissional',
            timestamps: false,
        });
    }

    static associate(models) {
        this.belongsTo(models.tbl_endereco , { foreignKey: 'id_endereco', as: 'fk_profissional_endereco_1' });
    }
}

module.exports = tbl_profissional;