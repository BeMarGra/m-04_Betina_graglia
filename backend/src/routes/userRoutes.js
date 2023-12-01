const userRoutes = require('express').Router();

const {
    verUsuarios,
    verUsuario,
    createUser,
    editarUsuario,
    eliminarUsuario,

} = require('./../controllers/usersControllers');

// Ver usuarios
userRoutes.get('/usuarios', verUsuarios);

// Ver usuario
userRoutes.get('/usuario:id', verUsuario);


// Crear usuario
userRoutes.post('/usuario', createUser);

// Editar usuario
userRoutes.put('/usuario', editarUsuario);

// Eliminar usuario
userRoutes.delete('/usuario', eliminarUsuario);


module.exports = userRoutes