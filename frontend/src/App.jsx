import { RouterProvider, } from "react-router-dom";
import './App.css'
import { rutas } from './router.jsx';
import {AutProvider} from "./context/autenticacionContex.jsx";

const App = () => {

  return (
      <AutProvider>
        <RouterProvider router={rutas} />
      </AutProvider>
  );
}

export default App
