import { createBrowserRouter } from "react-router-dom";


// Vistas
import { Inicio } from "./views/Inicio";
import { Ingresar } from "./views/Ingresar"
import { Registrarse } from "./views/Registrarse"
import { Usuario } from "./views/Usuario.jsx"
import { NuevoPosteo } from "./views/NuevoPosteo.jsx"
import { VerPosteos } from "./views/VerPosteos.jsx";
import { Editar } from "./views/Editar.jsx";


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
        path: "/verposteos",
        element: <VerPosteos />,
      }, {
        path: "/editar",
        element: <Editar />,
      },

  ]);

export { rutas }