const { DataTypes, Model } = require('sequelize');


class tbl_consultorio extends Model {
    static init(sequelize) {
        super.init({
            id_consultorio: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            email: {
                type: DataTypes.STRING(50),
                allowNull: false
            },
            dias_disponiveis: {
                type: DataTypes.STRING,
                allowNull: false
            },
            horarios_disponiveis: {
                type: DataTypes.STRING,
                allowNull: false
            },
            telefone: {
                type: DataTypes.STRING(20),
                allowNull: false
            },
            numero_sala: {
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            tipo_sala: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            id_endereco: {
                type: DataTypes.INTEGER,
                allowNull: true
            }
        
        }, {
            sequelize,
            tableName: 'tbl_consultorio',
            timestamps: false,
        });
    }

    static associate(models) {
        this.belongsTo(models.tbl_endereco , { foreignKey: 'id_endereco', as: 'fk_consultorio_endereco_1' });
    }
}

module.exports = tbl_consultorio;