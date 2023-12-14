const autenticacionUsuarioRouter = require('express').Router();

const {
    autenticar,
    verificarToken
} =  require ('./../controllers/AutenticarControllers.js');

autenticacionUsuarioRouter.post('/autenticar', autenticar);

autenticacionUsuarioRouter.post('/verificartoken', verificarToken);


module.exports = autenticacionUsuarioRouter;
