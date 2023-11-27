const { DataTypes, Model } = require('sequelize');

class tbl_endereco extends Model {
    static init(sequelize) {
        super.init({
            id_endereco: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            numero: {
                type: DataTypes.STRING(10),
                allowNull: false
            },
            logradouro: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            bairro: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            cidade: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            complemento: {
                type: DataTypes.STRING,
                allowNull: true
            },
            cep: {
                type: DataTypes.STRING(9),
                allowNull: false
            },
            uf: {
                type: DataTypes.STRING(2),
                allowNull: false
            },
        }, {
            sequelize,
            tableName: 'tbl_endereco',
            timestamps: false,
        });
    }
}

module.exports = tbl_endereco;