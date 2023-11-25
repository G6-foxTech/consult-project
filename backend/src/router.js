const express = require('express');

const router = express.Router();

const enderecoController = require('./controllers/enderecoController');

router.get('/', (req, res) => res.send('<h1>Hello World</h1>'));

router.post('/usuario', );
router.post('/profissional', );
router.post('/consultorio', );
router.post('/empresa', );
router.post('/locacao', );
router.post('/consultorio-empresa', );
router.post('/endereco', enderecoController.create);

router.get('/endereco', enderecoController.getAll);
router.get('/usuario', );
router.get('/profissional', );
router.get('/consultorio', );
router.get('/empresa', );
router.get('/locacao', );
router.get('/consultorio-empresa', );

router.get('/endereco/:id_endereco', enderecoController.getOne);

router.put('/endereco/:id_endereco', enderecoController.update);

router.delete('/endereco/:id_endereco', enderecoController.delete);

module.exports = router;