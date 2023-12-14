export const guardarDatos = (datos) => {
    const valorDatoATexto = JSON.stringify(datos);

    localStorage.setItem('usuario', valorDatoATexto);
}

export const guardarToken = (token) => {
    localStorage.setItem('token', token)
}

export const traerDatos = () => {

    const datos = localStorage.getItem('usuario');

    return JSON.parse(datos);
}

export const traertoken = () => {
    return localStorage.getItem('token');
}

export const limpiarLocalStorage = () => {
    localStorage.removeItem('usuario');
    localStorage.removeItem('token');
}

