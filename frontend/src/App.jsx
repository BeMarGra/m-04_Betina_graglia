import {
  RouterProvider,
} from "react-router-dom";
import { useState } from 'react'
import './App.css'
import { rutas } from './router.jsx';


function App() {

  return (
    <>
      <RouterProvider router={rutas} />
    </>
  );
}

export default App
