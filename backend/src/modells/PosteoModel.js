const { Schema, model } = require('mongoose');

const PosteoSchema = new Schema({
    title: String,
    description: String,
    autor: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    comments: String,
    imageURL: String,
    //fecha: {createDate:createdAt},
});

const PosteoModel = model('posteo', PosteoSchema);

module.exports = PosteoModel;