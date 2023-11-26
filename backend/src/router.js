const express = require('express');

const router = express.Router();

const nivelAcessoController = require('./controllers/nivelAcessoController');
const profissionalController = require('./controllers/profissionalController');
const empresaController = require('./controllers/empresaController');
const enderecoController = require('./controllers/enderecoController');
const usuarioController = require('./controllers/usuarioController');
const consultorioController = require('./controllers/consultorioController');

router.get('/', (req, res) => res.send('<h1>Hello World</h1>'));

router.post('/usuario', usuarioController.create);
router.post('/profissional', profissionalController.create);
router.post('/consultorio', consultorioController.create );
router.post('/empresa', empresaController.create);
router.post('/locacao', );
router.post('/consultorio-empresa', );
router.post('/endereco', enderecoController.create);

router.get('/usuario', usuarioController.getAll);
router.get('/nivelAcesso', nivelAcessoController.getAll);
router.get('/profissional', profissionalController.getAll );
router.get('/consultorio', consultorioController.getAll );
router.get('/empresa', empresaController.getAll);
router.get('/locacao', );
router.get('/consultorio-empresa', );
router.get('/endereco', enderecoController.getAll);

router.get('/usuario/:id_usuario', usuarioController.getOne);
router.get('/profissional/:id_profissional', profissionalController.getOne);
router.get('/consultorio/:id_consultorio', consultorioController.getOne);
router.get('/empresa/:id_empresa', empresaController.getOne);
router.get('/endereco/:id_endereco', enderecoController.getOne);

router.put('/usuario/:id_usuario', usuarioController.update);
router.put('/profissional/:id_profissional', profissionalController.update);
router.put('/consultorio/:id_consultorio', consultorioController.update);
router.put('/empresa/:id_empresa', empresaController.update);
router.put('/endereco/:id_endereco', enderecoController.update);

router.delete('/usuario/:id_usuario', usuarioController.delete);
router.delete('/profissional/:id_profissional', profissionalController.delete);
router.delete('/consultorio/:id_consultorio', consultorioController.delete);
router.delete('/empresa/:id_empresa', empresaController.delete);
router.delete('/endereco/:id_endereco', enderecoController.delete);


module.exports = router;