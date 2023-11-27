const locacaoModel = require('../models/locacaoModel');
const profissionalModel = require('../models/profissionalModel');
const consultorioModel = require('../models/consultorioModel');
const Sequelize = require('sequelize');

module.exports = {
    async getAll(req, res) {
        const locacao = await locacaoModel.findAll();

        return res.status(201).json(locacao);
    },

    async getOne(req, res) {
        try {
            const locacao = await locacaoModel.findAll({where: {id_locacao: req.params.id_locacao}});
            return res.json(locacao);
        } catch(error) {
            return res.status(404).json({message: 'locacao não encontrado'});
        }
        
    },
    
    async create(req, res) {
        const { dataInicio, dataTermino, valor_contrato, periodo_aluguel, id_profissional, id_consultorio } = req.body;
        
        let createLocacao;

        if(id_profissional || id_consultorio ) {

            if(!(await profissionalModel.findByPk(id_profissional))) {
                return res.status(400).json({ error: 'Profissional não encontrado.' }); 
            }

            if(!(await consultorioModel.findByPk(id_consultorio))) {
                return res.status(400).json({ error: 'Consultorio não encontrado.' }); 
            }

            createLocacao = await locacaoModel.create({ dataInicio, dataTermino, valor_contrato, periodo_aluguel, id_profissional, id_consultorio });
        } else {

            createLocacao = await locacaoModel.create({ dataInicio, dataTermino, valor_contrato, periodo_aluguel, id_profissional, id_consultorio });
        }
        

        return res.status(201).json(createLocacao);
    },

    async delete(req, res) {
        const { id_locacao } = req.params;
        const locacao = await locacaoModel.findByPk(id_locacao);

        if(!locacao) {
            return res.status(404).json({ message: 'locacao não encontrado '});
        }

        await locacao.destroy();

        return res.status(204).send();
    },

    async update(req, res) {
        
        const Op = Sequelize.Op;
        const { dataInicio, dataTermino, valor_contrato, periodo_aluguel, id_profissional, id_consultorio } = req.body;
        const id = req.params.id_locacao;

        try {
            
            if(id_profissional || id_consultorio) {

                if(!(await profissionalModel.findByPk(id_profissional))) {
                    return res.status(400).json({ error: 'Profissional não encontrado.' }); 
                }

                if(!(await consultorioModel.findByPk(id_consultorio))) {
                    return res.status(400).json({ error: 'Consultorio não encontrado.' }); 
                }

                await locacaoModel.update(
                    { dataInicio, dataTermino, valor_contrato, periodo_aluguel, id_profissional, id_consultorio }, 
                    { where: {id_locacao: {[Op.eq]: id}}});
            } else {
                await locacaoModel.update(
                    { dataInicio, dataTermino, valor_contrato, periodo_aluguel }, 
                    { where: {id_locacao: {[Op.eq]: id}}});
            }
            return res.json({message: 'locacao atualizado com sucesso'});
        } catch(err) {
            return res.json({message: 'locacao não foi atualizado, pois ele não existe ou foi inserido errado'});
        }
    },
};