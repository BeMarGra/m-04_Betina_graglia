const { Schema, model } = require('mongoose');

const CommentSchema = new Schema({
    autor: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    description: String,
});

const CommentModel = model('comment', CommentSchema);

module.exports = CommentModel;