const PosteoModel = require('../modells/PosteoModel.js');
const { verificarToken } = require ('./../utils/token.js')

const posteoController = {};

// Ver posteos
posteoController.verPosteos = async (req, res) => {
    try {
        const listaPosteos = await PosteoModel.find().populate('autor');
        //console.log(listaPosteos)
        return res.json(listaPosteos);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error interno',
            error: error
        });
    }
}

// Ver un posteo
posteoController.verPosteo = async (req, res) => {
    try {
        const { id } = req.params;

        const posteoEncontrado = await PosteoModel.findById(id);
               
        return res.json(posteoEncontrado);
    } catch (error) {
        let mensaje = 'Ocurrió un error interno';

        if (error.kind === 'ObjectId') {
            mensaje = 'No se pudo obtener el posteo';
        }

        return res.status(500).json({
            mensaje: mensaje,
            error: error
        });
    }
}

// Crear nuevo posteo
posteoController.crearPosteo = async (req, res) => {
    try {
        const { titulo, descripcion, imagenURL } = req.body;

            const { token } = req.headers;

            const tokenValido = verificarToken(token)
            
            if (!tokenValido) {
                return res.status(500).json({
                    mensaje: 'El token no es valido',
                    error: error
                });

            }

            const autor = tokenValido.id

        const nuevoPosteo = new PosteoModel({
            titulo: titulo,
            descripcion: descripcion,
            imagenURL: imagenURL,
            autor: autor,
        });

        await nuevoPosteo.save();

        return res.json({ mensaje: 'Posteo realizado con éxito' });
    } catch (error) { 
        return res.status(500).json({
            mensaje: 'Ocurrió un error interno back',
            error: error
        });
    }
}

// Editar posteo
posteoController.editarPosteo = async (req, res) => {
    try {
        const { id, titulo, descripcion, imagenURL} = req.body;
        const { token } = req.headers 

            const tokenValido = verificarToken(token)
            
            if (!tokenValido) {
                return res.status(500).json({
                    mensaje: 'El token no es valido',
                })

            }
            const userId = tokenValido.id
            const posteo = await PosteoModel.findById(id);

            console.log(userId)
            console.log(posteo)

        if (posteo.autor.toString() !== userId) {
            return res.status(500).json({
                mensaje: 'El autor no es el mismo'
            });
        }

        await PosteoModel.findByIdAndUpdate(
            id,
            { titulo: titulo, descripcion: descripcion, imagenURL: imagenURL }
        );

        return res.json({ mensaje: 'Posteo actualizado con éxito' });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error interno',
            error: error
        });
    }
}

// Eliminar posteo
posteoController.eliminarPosteo = async (req, res) => {
    try {
        const { id } = req.body;

        await PosteoModel.findByIdAndDelete(id);

        return res.json({ mensaje: 'Posteo eliminado con éxito' });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error interno',
            error: error
        });
    }
}

module.exports = posteoController;