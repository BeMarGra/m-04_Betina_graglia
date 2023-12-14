require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const conectarMongo = require('./config/DBConfig.js');

const userRoutes = require('./routes/userRoutes.js');
const posteoRoutes= require('./routes/posteoRoutes.js');
const comentRoutes= require('./routes/comentRoutes.js');
const autenticacionUsuarioRouter = require('./routes/AutenUruarioRoutes.js')


const app = express();
const PORT = 3005;

//Middleware
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use(userRoutes);
app.use(posteoRoutes);
app.use(comentRoutes);
app.use(autenticacionUsuarioRouter);


app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
    conectarMongo();
});