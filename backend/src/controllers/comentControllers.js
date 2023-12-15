const ComentModel = require('../modells/ComentModel.js');
const { verificarToken } = require('./../utils/token.js');

const comentController = {};

// Ver posteos
comentController.verComentarios = async (req, res) => {
    try {
            const { idPosteo } = req.params;
        
        const listaComentarios = await ComentModel.find({
            posteo: idPosteo
        }).populate('autor')

        const nuevaLista = listaComentarios.map(comentario =>{
            comentario.autor.password = null
           return comentario
           
        })
        console.log(nuevaLista)
        return res.json(nuevaLista);
        
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error interno',
            error: error
        });
    }
}

// Ver un posteo
// comentController.verComentario = async (req, res) => {
//     try {
//         const { id } = req.params;

//         const comentarioEncontrado = await ComentModel.findById(id);
               
//         return res.json(comentarioEncontrado);
//     } catch (error) {
//         let mensaje = 'Ocurrió un error interno';

//         if (error.kind === 'ObjectId') {
//             mensaje = 'No se pudo obtener el comentarios';
//         }

//         return res.status(500).json({
//             mensaje: mensaje,
//             error: error
//         });
//     }
// }

// Crear nuevo posteo

comentController.crearComentario = async (req, res) => {
    try {
        const { comentario, idPosteo } = req.body;
        const { token } = req.headers;

        const tokenValido = verificarToken(token);

        if (!tokenValido) {
            return res.status(500).json({
                mensaje: 'El token no es válido',
            });
        }

        const autor = tokenValido.id;

        const nuevoComentario = new ComentModel({
            comentario: comentario,
            autor: autor,
            posteo: idPosteo,
        });

        await nuevoComentario.save();
        console.log(nuevoComentario)

        return res.json({ mensaje: 'Comentario realizado con exito' });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error interno',
            error: error
        });
    }
}

// Editar posteo

// comentController.editarComentario = async (req, res) => {
//     try {
//         const { id, posteo } = req.body;

//         await ComentModel.findByIdAndUpdate(
//             id,
//             { comentario: comentario }
//         );

//         return res.json({ mensaje: 'Comentario actualizado con éxito' });
//     } catch (error) {
//         return res.status(500).json({
//             mensaje: 'Ocurrió un error interno',
//             error: error
//         });
//     }
// }

// Eliminar posteo

// comentController.eliminarComentario = async (req, res) => {
//     try {
//         const { id } = req.body;


//         await ComentModel.findByIdAndDelete(id);

//         return res.json({ mensaje: 'Comentario eliminado con éxito' });
//     } catch (error) {
//         return res.status(500).json({
//             mensaje: 'Ocurrió un error interno',
//             error: error
//         });
//     }
// }

module.exports = comentController;