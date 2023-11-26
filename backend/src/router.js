const express = require('express');

const router = express.Router();

const enderecoController = require('./controllers/enderecoController');
const profissionalController = require('./controllers/profissionalController');

router.get('/', (req, res) => res.send('<h1>Hello World</h1>'));

router.post('/usuario', );
router.post('/profissional', profissionalController.create);
router.post('/consultorio', );
router.post('/empresa', );
router.post('/locacao', );
router.post('/consultorio-empresa', );
router.post('/endereco', enderecoController.create);

router.get('/usuario', );
router.get('/profissional', profissionalController.getAll );
router.get('/consultorio', );
router.get('/empresa', );
router.get('/locacao', );
router.get('/consultorio-empresa', );
router.get('/endereco', enderecoController.getAll);

router.get('/endereco/:id_endereco', enderecoController.getOne);
router.get('/profissional/:id_profissional', profissionalController.getOne);

router.put('/profissional/:id_profissional', profissionalController.update);
router.put('/endereco/:id_endereco', enderecoController.update);

router.delete('/profissional/:id_profissional', profissionalController.delete);
router.delete('/endereco/:id_endereco', enderecoController.delete);


module.exports = router;