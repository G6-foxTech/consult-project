const consultorioModel = require('../models/consultorioModel');
const enderecoModel = require('../models/enderecoModel');
const Sequelize = require('sequelize');

module.exports = {
    async getAll(req, res) {
        const consultorio = await consultorioModel.findAll();

        return res.status(201).json(consultorio);
    },

    async getOne(req, res) {
        try {
            const consultorio = await consultorioModel.findAll({where: {id_consultorio: req.params.id_consultorio}});
            return res.json(consultorio);
        } catch(error) {
            return res.status(404).json({message: 'consultorio não encontrado'});
        }
        
    },
    
    async create(req, res) {
        const { nome, email, dias_disponiveis, horarios_disponiveis, telefone, numero_sala, tipo_sala, id_endereco } = req.body;
        
        let createconsultorio;

        if(id_endereco) {

            if(!(await enderecoModel.findByPk(id_endereco))) {
                return res.status(400).json({ error: 'Endereço não encontrado.' }); 
            }


            createconsultorio = await consultorioModel.create({ nome, email, dias_disponiveis, horarios_disponiveis, telefone, numero_sala, tipo_sala, id_endereco });
        } else {

            createconsultorio = await consultorioModel.create({ nome, email, dias_disponiveis, horarios_disponiveis, telefone, numero_sala, tipo_sala });
        }
        

        return res.status(201).json(createconsultorio);
    },

    async delete(req, res) {
        const { id_consultorio } = req.params;
        const consultorio = await consultorioModel.findByPk(id_consultorio);

        if(!consultorio) {
            return res.status(404).json({ message: 'consultorio não encontrado '});
        }

        await consultorio.destroy();

        return res.status(204).send();
    },

    async update(req, res) {
        
        const Op = Sequelize.Op;
        const { nome, email, dias_disponiveis, horarios_disponiveis, telefone, numero_sala, tipo_sala, id_endereco } = req.body;
        const id = req.params.id_consultorio;

        try {
            
            if(id_endereco) {

                if(!(await enderecoModel.findByPk(id_endereco))) {
                    return res.status(400).json({ error: 'Endereço não encontrado.' }); 
                }

                await consultorioModel.update(
                    { nome, email, dias_disponiveis, horarios_disponiveis, telefone, numero_sala, tipo_sala, id_endereco }, 
                    { where: {id_consultorio: {[Op.eq]: id}}});
            } else {
                await consultorioModel.update(
                    { nome, email, dias_disponiveis, horarios_disponiveis, telefone, numero_sala, tipo_sala }, 
                    { where: {id_consultorio: {[Op.eq]: id}}});
            }
            return res.json({message: 'consultorio atualizado com sucesso'});
        } catch(err) {
            return res.json({message: 'consultorio não foi atualizado, pois ele não existe ou foi inserido errado'});
        }
    },
};