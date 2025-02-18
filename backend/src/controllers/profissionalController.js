const profissionalModel = require('../models/profissionalModel');
const enderecoModel = require('../models/enderecoModel');
const bcrypt = require('bcrypt');
const Sequelize = require('sequelize');

module.exports = {
    async getAll(req, res) {
        const profissional = await profissionalModel.findAll();

        return res.status(201).json(profissional);
    },

    async getOne(req, res) {
        try {
            const profissional = await profissionalModel.findAll({where: {id_profissional: req.params.id_profissional}});
            return res.json(profissional);
        } catch(error) {
            return res.status(404).json({message: 'profissional não encontrado'});
        }
        
    },
    
    async create(req, res) {
        const { nome, especialidade, formacao, email, telefone, crm_crd_crp, senha,id_endereco } = req.body;

        const verificarProfissional = await profissionalModel.findOne({ where: { email: email }});
        if(verificarProfissional) {
            return res.status(400).json({ error: 'E-mail já cadastrado.' }); 
        }
        
        let passwordHash = await bcrypt.hash(senha, 12);

        let createprofissional;
        if(id_endereco) {

            if(!(await enderecoModel.findByPk(id_endereco))) {
                return res.status(400).json({ error: 'Endereço não encontrado.' }); 
            }

            createprofissional = await profissionalModel.create({ nome, especialidade, formacao, email, telefone, crm_crd_crp, senha: passwordHash, id_endereco });
        } else {

            createprofissional = await profissionalModel.create({ nome, especialidade, formacao, email, telefone, crm_crd_crp, senha: passwordHash});
        }
        

        return res.status(201).json(createprofissional);
    },

    async delete(req, res) {
        const { id_profissional } = req.params;
        const profissional = await profissionalModel.findByPk(id_profissional);

        if(!profissional) {
            return res.status(404).json({ message: 'Profissional não encontrado '});
        }

        await profissional.destroy();

        return res.status(204).send();
    },

    async update(req, res) {
        
        const Op = Sequelize.Op;
        const { nome, especialidade, formacao, email, telefone, crm_crd_crp, senha, id_endereco } = req.body;
        const id = req.params.id_profissional;
        let passwordHash = await bcrypt.hash(senha, 12);

        const verificarProfissional = await profissionalModel.findOne({ where: { email: email }});
        if(verificarProfissional) {
            return res.status(400).json({ error: 'E-mail já cadastrado.' }); 
        }
        
        try {
            if(id_endereco) {

                if(!(await enderecoModel.findByPk(id_endereco))) {
                    return res.status(400).json({ error: 'Endereço não encontrado.' }); 
                }

                await profissionalModel.update(
                    { nome, especialidade, formacao, email, telefone, crm_crd_crp, senha: passwordHash, id_endereco 
                    }, 
                    { where: {id_profissional: {[Op.eq]: id}}});
            } else {
                await profissionalModel.update(
                    { nome, especialidade, formacao, email, telefone, crm_crd_crp, senha: passwordHash }, 
                    { where: {id_profissional: {[Op.eq]: id}}});
            }
            return res.json({message: 'Profissional atualizado com sucesso'});
        } catch(err) {
            return res.json({message: 'Profissional não foi atualizado, pois ele não existe ou foi inserido errado'});
        }
    },
};