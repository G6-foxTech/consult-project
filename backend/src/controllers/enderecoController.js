const enderecoModel = require('../models/enderecoModel');
const Sequelize = require('sequelize');

module.exports = {
    async getAll(req, res) {
        const enderecos = await enderecoModel.findAll();

        return res.status(201).json(enderecos);
    },

    async getOne(req, res) {
        try {
            const endereco = await enderecoModel.findAll({where: {id_endereco: req.params.id_endereco}});
            return res.json(endereco);
        } catch(error) {
            return res.status(404).json({message: 'Endereço não encontrado'});
        }
        
    },
    
    async create(req, res) {
        const { numero, logradouro, bairro, cidade, complemento, cep, uf } = req.body;

        const createEndereco = await enderecoModel.create({ numero, logradouro, bairro, cidade, complemento, cep, uf });
    
        return res.status(201).json(createEndereco);
    },

    async delete(req, res) {
        const { id_endereco } = req.params;
        const endereco = await enderecoModel.findByPk(id_endereco);

        if(!endereco) {
            return res.status(404).json({ message: 'Endereço não encontrado '});
        }

        await endereco.destroy();

        return res.status(204).send();
    },

    async update(req, res) {
        
        const Op = Sequelize.Op;
        const { numero, logradouro, bairro, cidade, complemento, cep, uf } = req.body;
        const id =req.params.id_endereco;

        try {
            await enderecoModel.update(
                { numero, logradouro, bairro, cidade, complemento, cep, uf }, 
                { where: {id_endereco: {[Op.eq]: id}}});

            return res.json({message: 'Endereço atualizado com sucesso'});
        } catch(err) {
            return res.json({message: 'Endereço não foi atualizado, pois ele não existe ou foi inserido errado'});
        }
    },
};