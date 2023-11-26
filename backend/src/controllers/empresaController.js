const empresaModel = require('../models/empresaModel');
const enderecoModel = require('../models/enderecoModel');
const Sequelize = require('sequelize');

module.exports = {
    async getAll(req, res) {
        const empresa = await empresaModel.findAll();

        return res.status(201).json(empresa);
    },

    async getOne(req, res) {
        try {
            const empresa = await empresaModel.findAll({where: {id_empresa: req.params.id_empresa}});
            return res.json(empresa);
        } catch(error) {
            return res.status(404).json({message: 'empresa não encontrado'});
        }
        
    },
    
    async create(req, res) {
        const { cnpj, razao_social, email, telefone, id_endereco } = req.body;

        if((await empresaModel.findOne({ $or: [{ email }]}))) {
            return res.status(400).json({ error: 'E-mail já cadastrado.' }); 
        }
        
        let createEmpresa;
        if(id_endereco) {

            if(!(await enderecoModel.findByPk(id_endereco))) {
                return res.status(400).json({ error: 'Endereço não encontrado.' }); 
            }

            createEmpresa = await empresaModel.create({ cnpj, razao_social, email, telefone, id_endereco });
        } else {
            createEmpresa = await empresaModel.create({ cnpj, razao_social, email, telefone });
        }
        

        return res.status(201).json(createEmpresa);
    },

    async delete(req, res) {
        const { id_empresa } = req.params;
        const empresa = await empresaModel.findByPk(id_empresa);

        if(!empresa) {
            return res.status(404).json({ message: 'empresa não encontrado '});
        }

        await empresa.destroy();

        return res.status(204).send();
    },

    async update(req, res) {
        
        const Op = Sequelize.Op;
        const { cnpj, razao_social, email, telefone, id_endereco } = req.body;
        const id = req.params.id_empresa;

        try {
            if(id_endereco) {

                if(!(await enderecoModel.findByPk(id_endereco))) {
                    return res.status(400).json({ error: 'Endereço não encontrado.' }); 
                }

                await empresaModel.update(
                    { cnpj, razao_social, email, telefone, id_endereco }, 
                    { where: {id_empresa: {[Op.eq]: id}}});
            } else {
                await empresaModel.update(
                    { cnpj, razao_social, email, telefone }, 
                    { where: {id_empresa: {[Op.eq]: id}}});
            }
            return res.json({message: 'empresa atualizado com sucesso'});
        } catch(err) {
            return res.json({message: 'empresa não foi atualizado, pois ele não existe ou foi inserido errado'});
        }
    },
};