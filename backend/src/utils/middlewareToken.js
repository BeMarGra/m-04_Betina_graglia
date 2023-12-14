const jwt = require('jsonwebtoken');
const JWT_KEY = process.env.JWT_KEY; 

function validarToken(req, res) {
    const token = req.headers;

  if (!token) {
    return res.status(404).json({ mensaje: 'Acceso denegado. Token no encontrado.' });
  }

  try {

    const decoded = jwt.verify(token, JWT_KEY);

    req.usuario = decoded.usuario;

  } catch (error) {

    return res.status(401).json({ mensaje: 'Token inválido.' });
  }
}

module.exports = validarToken;