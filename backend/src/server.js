require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const conectarMongo = require('./config/DBConfig.js');
const userRoutes = require('./routes/userRoutes.js');
// const autenticacionRouters = require('./routes/autenticacionRouters.js');
const posteoRoutes = require('./routes/postRoutes.js');

const app = express();
const PORT = 3005;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use(userRoutes);
// app.use(autenticacionRouters);
app.use(posteoRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
    conectarMongo();
});