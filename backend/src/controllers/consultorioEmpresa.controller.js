const consultorioEmpresaModel = require('../models/consultorioEmpresaModel');
const empresaModel = require('../models/empresaModel');
const consultorioModel = require('../models/consultorioModel');
const Sequelize = require('sequelize');

module.exports = {
    async getAll(req, res) {
        const consultorioEmpresa = await consultorioEmpresaModel.findAll();

        return res.status(201).json(consultorioEmpresa);
    },

    async getOne(req, res) {
        try {
            const consultorioEmpresa = await consultorioEmpresaModel.findAll({where: {id_consultorio_empresa: req.params.id_consultorio_empresa}});
            return res.json(consultorioEmpresa);
        } catch(error) {
            return res.status(404).json({message: 'consultorioEmpresa não encontrado'});
        }   
    },
    
    async create(req, res) {
        const { id_empresa, id_consultorio } = req.body;
        
        let createConsultorioEmpresa;

        

        if(!(await empresaModel.findByPk(id_empresa))) {
            return res.status(400).json({ error: 'Empresa não encontrado.' }); 
        }

        if(!(await consultorioModel.findByPk(id_consultorio))) {
            return res.status(400).json({ error: 'Consultorio não encontrado.' }); 
        }

        createConsultorioEmpresa = await consultorioEmpresaModel.create({  id_empresa, id_consultorio });
        

        return res.status(201).json(createConsultorioEmpresa);
    },

    async delete(req, res) {
        const { id_consultorio_empresa } = req.params;
        const consultorioEmpresa = await consultorioEmpresaModel.findByPk(id_consultorio_empresa);

        if(!consultorioEmpresa) {
            return res.status(404).json({ message: 'consultorioEmpresa não encontrado '});
        }

        await consultorioEmpresa.destroy();

        return res.status(204).send();
    },

    async update(req, res) {
        
        const Op = Sequelize.Op;
        const {  id_empresa, id_consultorio } = req.body;
        const id = req.params.id_consultorio_empresa;

        try {

            if(!(await empresaModel.findByPk(id_empresa))) {
                return res.status(400).json({ error: 'Empresa não encontrado.' }); 
            }

            if(!(await consultorioModel.findByPk(id_consultorio))) {
                return res.status(400).json({ error: 'Consultorio não encontrado.' }); 
            }

            await consultorioEmpresaModel.update(
                {  id_empresa, id_consultorio }, 
                { where: {id_consultorio_empresa: {[Op.eq]: id}}}
            );
             
            return res.json({message: 'consultorioEmpresa atualizado com sucesso'});
        } catch(err) {
            return res.json({message: 'consultorioEmpresa não foi atualizado, pois ele não existe ou foi inserido errado'});
        }
    },
};