import { createBrowserRouter } from "react-router-dom";

// Vistas
import { Inicio } from "./views/Inicio";
import { Ingresar } from "./views/Ingresar"
import { Registrarse } from "./views/Registrarse"
import { Usuario } from "./views/Usuario.jsx"
import { NuevoPosteo } from "./views/NuevoPosteo.jsx"
import { EditarPosteo } from "./views/editarPosteo.jsx"
import { Eliminar } from "./views/Eliminar.jsx"
import { VerPosteo } from "./views/VerPosteo.jsx";


// Rutas
  const rutas = createBrowserRouter([
    {
      path: "/",
      element: <Inicio />,
    }, {
        path: "/ingresar",
        element: <Ingresar />,
      }, {
        path: "/registro",
        element: <Registrarse />,
      }, {
        path: "/usuario",
        element: <Usuario />,
      }, {
        path: "/nuevoposteo",
        element: <NuevoPosteo />,
      }, {
        path: "/posteo/:id",
        element: <VerPosteo />,
      }, {
        path: "/editar/:id",
        element: <EditarPosteo />,
      }, {
        path: "/eliminar/:id",
        element: <Eliminar />,
      },

  ]);

export { rutas }