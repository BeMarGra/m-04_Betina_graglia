const { Schema, model } = require('mongoose');

const comentSchema = new Schema({
    autor: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }],
    descripcion: String,
});

const ComentModel = model('coment', comentSchema);

module.exports = ComentModel;