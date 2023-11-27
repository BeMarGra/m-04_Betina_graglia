const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: String,
    password: String,
    email : String,
    avatarURL: String,
});

const UserModel = model('user', UserSchema);

module.exports = UserSchema;