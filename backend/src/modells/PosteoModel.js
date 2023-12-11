const { Schema, model } = require('mongoose');

const posteoSchema = new Schema({

    titulo: String,
    descripcion: String,
    autor: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }],
    comentario: [{
        type: Schema.Types.ObjectId,
        ref: 'coment'
    }],
    imagenURL: String,
    
    createAt: {
        type: Date,
        default: Date.now,
    },
});

const PosteoModel = model('posteo', posteoSchema);

module.exports = PosteoModel;