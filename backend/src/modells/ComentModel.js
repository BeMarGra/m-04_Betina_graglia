const { Schema, model } = require('mongoose');

const comentSchema = new Schema({
    comentario: String,
    autor: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    posteo: {
        type: Schema.Types.ObjectId,
        ref: 'posteo'
    },
    
});

const ComentModel = model('coment', comentSchema);

module.exports = ComentModel;