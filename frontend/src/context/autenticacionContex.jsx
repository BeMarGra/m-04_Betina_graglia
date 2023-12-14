import { createContext, useContext, useState } from "react";
import { guardarDatos, 
        guardarToken, 
        traerDatos, 
        traertoken, 
        limpiarLocalStorage 
    } from "../utils/logueo";


const AutContexto = createContext();

const AutProvider = (props) => {
    const { children } = props;

    const [usuario, setUsuario] = useState(traerDatos());
    const [token, setToken] = useState(traertoken());

    const abrirSecion = (datos, token) =>{
        guardarDatos(datos);
        guardarToken(token);

        setUsuario(datos);
        setToken(token);
    }

    const cerrarSecion = () =>{
        limpiarLocalStorage();

        setUsuario(null);
        setToken(null);
    }
    return (
        <AutContexto.Provider value={{ usuario, token,  abrirSecion, cerrarSecion }}>
            { children }
        </AutContexto.Provider>
    );
}

const useAutContext = () => useContext(AutContexto);

export {
    AutProvider,
    useAutContext,
}