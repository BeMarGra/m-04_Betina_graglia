const PosteoModel = require('../modells/PosteoModel');
const posteoController = {};

// Ver posteos
posteoController.verPosteos = async (req, res) => {
    try {
        const listaPosteos = await PosteoModel.find();
        
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

        const usuarioEncontrado = await PosteoModel.findById(id);
               
        return res.json(usuarioEncontrado);
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
        const nuevoUsuario = new PosteoModel({
            titulo: titulo,
            descripcion: descripcion,
            imagenURL: imagenURL,
        });
        await nuevoUsuario.save();
        return res.json({ mensaje: 'Posteo realizado con éxito' });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error interno',
            error: error
        });
    }
}

// Editar posteo
posteoController.editarPosteo = async (req, res) => {
    try {
        const { id,titulo, descripcion, imagenURLL } = req.body;

        await PosteoModel.findByIdAndUpdate(
            id,
            { titulo: titulo, descripcion: descripcion, imagenURLL: imagenURLL  }
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