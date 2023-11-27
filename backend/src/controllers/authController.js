const usuarioModel = require('../models/usuarioModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET = process.env.SECRET;

module.exports = {

    async login(req, res) {

        try {
            
            const { usuario, senha } = req.body;

            const usuarioBank = await usuarioModel.findOne({ where: { usuario }});

            if(!usuarioBank) {
                return res.status(401).json({ message: 'Usuário não encontrado' });
            }

            const validacaoPassword = await bcrypt.compare(senha, usuarioBank.senha);

            if(!validacaoPassword) {
                return res.status(401).json({ message: 'Não autorizado!' });
            }

            const token = jwt.sign({ usuario: usuarioBank.usuario }, SECRET);

            return res.status(200).json({ 
                message: 'Login realizado com sucesso',
                data: {
                    token,
                },
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error no servidor'});
        }
    }
};


