const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;

const conectarMongo = async () => {
    try {
        console.log('Conectando...');
        await mongoose.connect(MONGO_URI);
        console.log('Éxito')
    } catch (error) {
        console.log('Error: ', error);
    }
}

module.exports = conectarMongo;