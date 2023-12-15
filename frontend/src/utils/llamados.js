import axios from 'axios';

const url = 'http://localhost:3005/';

const traerDatosDePosteoPorID = async (id) => {
    const endpoint = url + 'posteo/' + id;

    try {
        const respuesta = await axios.get(endpoint);
        console.log(respuesta + 'posteos')

        if (respuesta.status === 200) {
            return respuesta.data;
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
}

const traerComentariosDePosteoPorID = async (idPosteo) => {
    const endpoint = url + 'comentarios/' + idPosteo;

    try {
        const respuesta = await axios.get(endpoint);
        console.log(respuesta + 'comentarios')

        if (respuesta.status === 200) {
            return respuesta.data;
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
}

export {
    traerDatosDePosteoPorID,
    traerComentariosDePosteoPorID,
}