const comentRoutes = require('express').Router();

const {
    verComentarios,
    verComentario,
    crearComentario,
    editarComentario,
    eliminarComentario,

} = require('./../controllers/comentControllers.js');


// Ver posteos
comentRoutes.get('/comentarios', verComentarios);

// Ver un posteo
comentRoutes.get('/comentario:id', verComentario);


// Crear posteo
comentRoutes.post('/comentario', crearComentario);

// Editar posteo
comentRoutes.put('/comentario', editarComentario);

// Eliminar posteo
comentRoutes.delete('/comentario', eliminarComentario);


module.exports = comentRoutes