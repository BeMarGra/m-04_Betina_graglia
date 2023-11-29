const UserModel = require('../modells/UserModel.js');
const userController = {};

// Ver usuarios
userController.verUsuarios = async (req, res) => {
    try {
        const listaUsuarios = await UserModel.find();
        
        return res.json(listaUsuarios);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error interno',
            error: error
        });
    }
}

// Ver usuario
userController.verUsuario = async (req, res) => {
    try {
        const { id } = req.params;

        const usuarioEncontrado = await UserModel.findById(id);
        
        return res.json(usuarioEncontrado);
    } catch (error) {
        let mensaje = 'Ocurrió un error interno al intentar obtener el usuario';

        if (error.kind === 'ObjectId') {
            mensaje = 'No se pudo obtener el usuario';
        }

        return res.status(500).json({
            mensaje: mensaje,
            error: error
        });
    }
}

// Crear nuevo usuario
userController.createUser = async (req, res) => {
    try {
        const { username, password, email, avatarURL } = req.body;
        const nuevoUsuario = new UserModel({
            username: username,
            password: password,
            email: email,
            avatarURL: avatarURL,
        });
        await nuevoUsuario.save();
        return res.json({ mensaje: 'Usuario creado con éxito' });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error interno al intentar crear el usuario',
            error: error
        });
    }
}

// Editar usuario
userController.editarUsuario = async (req, res) => {
    try {
        const { id, username, password, email, avatarURL } = req.body;

        await UserModel.findByIdAndUpdate(
            id,
            { username: username, password: password, email: email, avatarURL: avatarURL  }
        );

        return res.json({ mensaje: 'Usuario actualizado con éxito' });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error interno al intentar editar el usuario',
            error: error
        });
    }
}

// Eliminar usuario
userController.eliminarUsuario = async (req, res) => {
    try {
        const { id } = req.body;
        console.log('el id es ',id)

        await UserModel.findByIdAndDelete(id);

        return res.json({ mensaje: 'Usuario eliminado con éxito' });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error interno al intentar eliminar el usuario',
            error: error
        });
    }
}

module.exports = userController;