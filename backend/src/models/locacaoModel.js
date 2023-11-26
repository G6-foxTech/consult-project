const { DataTypes, Model } = require('sequelize');


class tbl_locacao extends Model {
    static init(sequelize) {
        super.init({
            id_locacao: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            dataInicio: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            dataTermino: {
                type: DataTypes.STRING(50),
                allowNull: false
            },
            valor_contrato: {
                type: DataTypes.DECIMAL(10, 2),
                allowNull: false
            },
            periodo_aluguel: {
                type: DataTypes.STRING,
                allowNull: false
            },
            id_profissional: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            id_consultorio: {
                type: DataTypes.INTEGER,
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'tbl_locacao',
            timestamps: false,
        });
    }

    static associate(models) {
        this.belongsTo(models.tbl_profissional , { foreignKey: 'id_profissional', as: 'fk_locacao_1' });
        this.belongsTo(models.tbl_consultorio , { foreignKey: 'id_consultorio', as: 'fk_locacao_2' });
    }
}

module.exports = tbl_locacao;