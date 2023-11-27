const userModel = require ('./../modells/UserModel');

const userController = {}

// Ver usuarios
userController.verUsuarios = async (req, res) => {
    try {
        const listaUsuarios = await userModel.findAll();

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

        const usuarioEncontrado = await userModel.findByPk(id);

        if (usuarioEncontrado) {
            return res.json(usuarioEncontrado);
        } else {
            return res.status(500).json({
                error: 'Usuario inexistente.'
            });
        }
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error al buscar el usuario',
            error: error
        });
    }
}

// Crear nuevo usuario
userController.createUser = async (req, res) => {
    try {
        const { nombre, contrasenia, correo, urlAvatar  } = req.body;

        const nuevoUsuario = await userModel.create({
            username: nombre,
            password: contrasenia,
            email : correo,
            avatarURL: urlAvatar,
        });

        if (nuevoUsuario) {
            return res.json({ mensaje: 'Usuario creado correctamente.' });
        } else {
            return res.status(500).json({
                error: 'No se pudo crear el usuario.'
            });
        }
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error al intentar crear el usuario',
            error: error
        });
    }
}

// Editar usuario
userController.editarUsuario = async (req, res) => {
    try {
        const { id, nombres, apellidos } = req.body;

        if (!id || !nombres || !apellidos) {
            return res.status(500).json({
                error: 'Faltan datos'
            });
        }

        const usuarioEditado = await userModel.update(
            {
                username: nombres,
                password: apellidos,
            }, {
                where: {
                    _id: id,
                }
            }
        );

        if (usuarioEditado) {
            return res.json({ mensaje: 'Usuario editado con exito' });
        } else {
            return res.status(500).json({
                error: 'No se pudo editar el usuario.'
            });
        }
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error al intentar editar  el usuario',
            error: error
        });
    }
}

// Eliminar usuario
userController.eliminarUsuario = async (req, res) => {
    try {
        console.log(req.body)
        const { id } = req.body;

        const eliminado = await userModel.destroy({ where: { _id: id } });

        if (eliminado) {
            return res.json({ mensaje: 'Se elimino el usuario' });
        } else {
            return res.status(500).json({
                mensaje: 'No se pudo eliminar el usuario.',
            });
        }
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error al intentar eliminar el usuario',
            error: error
        });
    }
}

module.exports = userController;