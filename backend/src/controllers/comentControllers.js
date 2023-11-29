const ComentModel = require('../modells/ComentModel.js');

const comentController = {};

// Ver posteos
comentController.verComentarios = async (req, res) => {
    try {
        const listaComentarios = await ComentModel.find();
        
        return res.json(listaComentarios);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error interno',
            error: error
        });
    }
}

// Ver un posteo
comentController.verComentario = async (req, res) => {
    try {
        const { id } = req.params;

        const comentarioEncontrado = await ComentModel.findById(id);
               
        return res.json(comentarioEncontrado);
    } catch (error) {
        let mensaje = 'Ocurrió un error interno';

        if (error.kind === 'ObjectId') {
            mensaje = 'No se pudo obtener el comentarios';
        }

        return res.status(500).json({
            mensaje: mensaje,
            error: error
        });
    }
}

// Crear nuevo posteo
comentController.crearComentario = async (req, res) => {
    try {
        const { descripcion } = req.body;
        const nuevoComentario = new ComentModel({
            descripcion: descripcion,
        });
        await nuevoComentario.save();
        return res.json({ mensaje: 'Comentario realizado con exito' });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error interno',
            error: error
        });
    }
}

// Editar posteo
comentController.editarComentario = async (req, res) => {
    try {
        const { id, descripcion } = req.body;

        await ComentModel.findByIdAndUpdate(
            id,
            { descripcion: descripcion }
        );

        return res.json({ mensaje: 'Comentario actualizado con éxito' });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error interno',
            error: error
        });
    }
}

// Eliminar posteo
comentController.eliminarComentario = async (req, res) => {
    try {
        const { id } = req.body;


        await ComentModel.findByIdAndDelete(id);

        return res.json({ mensaje: 'Comentario eliminado con éxito' });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error interno',
            error: error
        });
    }
}

module.exports = comentController;