const express = require('express');

const router = express.Router();

const enderecoController = require('./controllers/enderecoController');
const enderecoMiddleware = require('./middlewares/enderecoMiddleware');

router.get('/address', enderecoController.getAll);
router.post('/address', enderecoMiddleware.validateFieldTitle, enderecoController.createTask);
router.delete('/address/:id', enderecoController.deleteTask);
router.put('/address/:id', 
    enderecoMiddleware.validateFieldTitle, 
    enderecoMiddleware.validateFieldStatus, 
    enderecoController.updateTask
);

module.exports = router;