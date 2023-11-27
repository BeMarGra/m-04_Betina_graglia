const PosteoModel = require('./../modells/PosteoModel.js');

const { verificarToken } = require('./../utils/token.js');

const PosteosController = {}

// Ver publicaciones
PosteosController.viewPosts = async (req, res) => {
    try {
        const listadoPosts = await PosteoModel.find();
        
        return res.json(listadoPosts);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Error interno',
            error: error
        });
    }
}

// Ver publicación
PosteosController.viewPost = async (req, res) => {
    try {
        const { id } = req.params;

        const postFind = await PosteoModel.findById(id);
        
        return res.json(postFind);
    } catch (error) {
        let mensaje = 'Ocurrió un erroral al obtener el posteo';

        if (error.kind === 'ObjectId') {
            mensaje = 'No se pudo encontrar el posteo';
        }

        return res.status(500).json({
            mensaje: mensaje,
            error: error
        });
    }
}

// Crear publicación
PosteosController.createPost = async (req, res) => {
    try {
        const { titulo, descripcion } = req.body;

        const { token } = req.headers;

        const tokenValido = verificarToken(token);

        if (!tokenValido) {
            return res.status(500).json({
                mensaje: 'Usuario no registrado',
                error: error
            });
        }

        const autor = tokenValido.id;

        const nuevoPosteo = new PosteoModel({
            titulo: titulo,
            descripcion: descripcion,
            autor: autor,
        });

        await nuevoPosteo.save();

        return res.json({ mensaje: 'Posteo realizado con éxito' });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error al intentar crear el posteo',
            error: error
        });
    }
}

// Editar publicación
PosteosController.editPost = async (req, res) => {
    try {
        const { id, titulo, descripcion, autor } = req.body;

        // Validar el autor...

        await PosteoModel.findByIdAndUpdate(
            id,
            { titulo: titulo, descripcion: descripcion }
        );

        return res.json({ mensaje: 'Publicación editada con éxito' });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error al intentar editar la publicación',
            error: error
        });
    }
}

// Eliminar publicación
PosteosController.deletePost = async (req, res) => {
    try {
        const { id } = req.body;

        await PosteoModel.findByIdAndDelete(id);

        return res.json({ mensaje: 'Publicación eliminada con éxito' });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error interno al intentar eliminar la publicación',
            error: error
        });
    }
}

module.exports = PosteosController;