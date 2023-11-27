const express = require('express');

const router = express.Router();

const nivelAcessoController = require('./controllers/nivelAcessoController');
const profissionalController = require('./controllers/profissionalController');
const empresaController = require('./controllers/empresaController');
const enderecoController = require('./controllers/enderecoController');
const usuarioController = require('./controllers/usuarioController');
const consultorioController = require('./controllers/consultorioController');
const locacaoController = require('./controllers/locacaoController');
const consultorioEmpresaController = require('./controllers/consultorioEmpresa.controller');
const authController = require('./controllers/authController');

router.get('/', (req, res) => res.send('<h1>Forbidden</h1>'));

router.post('/usuario', usuarioController.create);
router.post('/profissional', profissionalController.create);
router.post('/consultorio', consultorioController.create );
router.post('/empresa', empresaController.create);
router.post('/locacao', locacaoController.create);
router.post('/consultorioEmpresa', consultorioEmpresaController.create);
router.post('/endereco', enderecoController.create);

router.get('/usuario', authController.verificarToken, usuarioController.getAll);
router.get('/nivelAcesso', authController.verificarToken, nivelAcessoController.getAll);
router.get('/profissional', authController.verificarToken, profissionalController.getAll );
router.get('/consultorio', authController.verificarToken, consultorioController.getAll );
router.get('/empresa', authController.verificarToken, empresaController.getAll);
router.get('/locacao', authController.verificarToken, locacaoController.getAll);
router.get('/consultorioEmpresa', authController.verificarToken, consultorioEmpresaController.getAll);
router.get('/endereco', authController.verificarToken, enderecoController.getAll);

router.get('/usuario/:id_usuario', authController.verificarToken, usuarioController.getOne);
router.get('/profissional/:id_profissional', authController.verificarToken, profissionalController.getOne);
router.get('/consultorio/:id_consultorio', authController.verificarToken, consultorioController.getOne);
router.get('/empresa/:id_empresa', authController.verificarToken, empresaController.getOne);
router.get('/locacao/:id_locacao', authController.verificarToken, locacaoController.getOne);
router.get('/consultorioEmpresa/:id_consultorio_empresa', authController.verificarToken, consultorioEmpresaController.getOne);
router.get('/endereco/:id_endereco', authController.verificarToken, enderecoController.getOne);

router.put('/usuario/:id_usuario', authController.verificarToken, usuarioController.update);
router.put('/profissional/:id_profissional', authController.verificarToken, profissionalController.update);
router.put('/consultorio/:id_consultorio', authController.verificarToken, consultorioController.update);
router.put('/empresa/:id_empresa', authController.verificarToken, empresaController.update);
router.put('/locacao/:id_locacao', authController.verificarToken, locacaoController.update);
router.put('/consultorioEmpresa/:id_consultorio_empresa', authController.verificarToken, consultorioEmpresaController.update);
router.put('/endereco/:id_endereco', authController.verificarToken, enderecoController.update);

router.delete('/usuario/:id_usuario',authController.verificarToken, usuarioController.delete);
router.delete('/profissional/:id_profissional',authController.verificarToken, profissionalController.delete);
router.delete('/consultorio/:id_consultorio',authController.verificarToken, consultorioController.delete);
router.delete('/empresa/:id_empresa',authController.verificarToken, empresaController.delete);
router.delete('/locacao/:id_locacao',authController.verificarToken, locacaoController.delete);
router.delete('/consultorioEmpresa/:id_consultorio_empresa',authController.verificarToken, consultorioEmpresaController.delete);
router.delete('/endereco/:id_endereco',authController.verificarToken, enderecoController.delete);

router.post('/login', authController.login);
router.post('/token', authController.verificarToken, usuarioController.rotaAutenticada);

module.exports = router;