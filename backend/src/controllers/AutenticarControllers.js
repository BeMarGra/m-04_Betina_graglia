const jwt = require('jsonwebtoken');
const UserModel = require('./../modells/UserModel.js');

const AutenticarController = {}

const JWT_KEY = process.env.JWT_KEY;

AutenticarController.autenticar = async (req, res) => {
    try {
        const { email, password } = req.body;

        const usuarioEncontrado = await UserModel.findOne({
            email: email,
            password: password,
        });

        if (!usuarioEncontrado) {
            return res.status(404).json({ mensaje: 'El usuario no se encontro.' });
        }

        const datos = {
            id: usuarioEncontrado._id,
            username: usuarioEncontrado.username,
            email: usuarioEncontrado.email,
            avatarURL: usuarioEncontrado.avatarURL,
        }

        let token = jwt.sign(datos, JWT_KEY, {expiresIn: '2 days' });

        res.json({ token: token, datos: datos });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ mensaje: 'Se produjo un error interno.' });
    }
}

AutenticarController.verificarToken = (req, res) => {                                              
    const token = req.body.token;

    try {
        let desencriptado = jwt.verify(token, JWT_KEY);

        res.json({ datos: desencriptado });
    } catch (error) {
        res.status(500).json({
            mensaje: 'Se ha generado un error interno',
            error: error,
        });
    }
}

module.exports = AutenticarController;