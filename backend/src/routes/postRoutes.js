const posteoRouter = require('express').Router();

const {
    viewPost,
    viewPosts,
    createPost,
    editPost,
    deletePost,
} = require('./../controllers/postsControllers.js');

// Ver publicaciones
posteoRouter.get('/publicaciones', viewPosts);

// Ver publicacion
posteoRouter.get('/publicacion/:id', viewPost);

// Crear publicacion
posteoRouter.post('/publicacion', createPost);

// Editar publicacion
posteoRouter.put('/publicacion', editPost);

// Eliminar publicacion
posteoRouter.delete('/publicacion', deletePost);

module.exports = posteoRouter;