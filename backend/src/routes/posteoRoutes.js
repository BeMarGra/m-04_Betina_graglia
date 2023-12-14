const posteoRoutes = require('express').Router();

const {
    verPosteos,
    verPosteo,
    crearPosteo,
    editarPosteo,
    eliminarPosteo,

} = require('./../controllers/posteoControllers.js');

const { verificarToken } = require('../controllers/AutenticarControllers.js');

// Ver posteos
posteoRoutes.get('/posteos', verPosteos);

// Ver un posteo
posteoRoutes.get('/posteo/:id', verPosteo);


// Crear posteo
posteoRoutes.post('/posteo', crearPosteo);

// Editar posteo
posteoRoutes.put('/posteo', editarPosteo);

// Eliminar posteo
posteoRoutes.delete('/posteo', eliminarPosteo);


module.exports = posteoRoutes