const usuarioModel = require('../models/usuarioModel');
const bcrypt = require('bcrypt');
const Sequelize = require('sequelize');

module.exports = {
    async getAll(req, res) {
        const usuario = await usuarioModel.findAll();

        return res.status(201).json(usuario);
    },

    async getOne(req, res) {
        try {
            const usuario = await usuarioModel.findAll({where: {id_usuario: req.params.id_usuario}});
            return res.json(usuario);
        } catch(error) {
            return res.status(404).json({message: 'usuario não encontrado'});
        }
    },
    
    async create(req, res) {
        const { usuario, nome, senha, email } = req.body;

        let createusuario;

        const verificarUsuario = await usuarioModel.findOne({ where: { usuario: usuario }});
        if(verificarUsuario) {
            return res.status(400).json({ error: 'Usuario já cadastrado.' }); 
        }

        let passwordHash = await bcrypt.hash(senha, 12);

        createusuario = await usuarioModel.create({ usuario, nome, senha: passwordHash, email });
        

        return res.status(201).json(createusuario);
    },

    async delete(req, res) {
        const { id_usuario } = req.params;
        const usuario = await usuarioModel.findByPk(id_usuario);

        if(!usuario) {
            return res.status(404).json({ message: 'usuario não encontrado '});
        }

        await usuario.destroy();

        return res.status(204).send();
    },

    async update(req, res) {
        
        const Op = Sequelize.Op;
        const { usuario, nome, senha, email } = req.body;
        const id = req.params.id_usuario;
        let passwordHash = await bcrypt.hash(senha, 12);

        try {

            if(!(await usuarioModel.findOne(usuario))) {
                return res.status(400).json({ error: 'Usuario já cadastrado.' }); 
            }

            await usuarioModel.update(
                { usuario, nome, senha: passwordHash, email }, 
                { where: {id_usuario: {[Op.eq]: id}}});
           
            return res.json({message: 'usuario atualizado com sucesso'});
        } catch(err) {
            return res.json({message: 'usuario não foi atualizado, pois ele não existe ou foi inserido errado'});
        }
    },

    rotaAutenticada(req, res) {
        res.status(200).send({message: 'funcionou'});
    },
};