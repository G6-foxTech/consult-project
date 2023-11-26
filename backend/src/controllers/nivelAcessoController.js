
const nivelAcessoModel = require('../models/nivelAcessoModel');

module.exports = {
    async getAll(req, res) {
        const nivelAcesso = await nivelAcessoModel.findAll();

        return res.status(201).json(nivelAcesso);
    }
};