import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

import { Container, Navbar, Button, } from 'react-bootstrap';

import CardInicio from './../components/CardInicio.jsx'
import { useAutContext } from "../context/autenticacionContex.jsx";


const Inicio = () => {

  const navigate = useNavigate();
  const navigate2 = useNavigate();


  const ingresar = () => {
    navigate('/ingresar')
  };

  const registrarse = () => {
    navigate2('/registro')
  };

    const [posteos, setPosteos] = useState([])

    const autContext = useAutContext();

    //Llamado al servidor

    const cargarPosteos = async () =>{
      const url = 'http://localhost:3005/posteos'

      let respuesta = await fetch(url);

      if (respuesta.status === 200) {
        respuesta = await respuesta.json();
        setPosteos(respuesta);
      }
    }
    
    useEffect(() => {
      cargarPosteos();
      console.log(autContext)
    }, [])

    return (
      <>
        <Navbar expand="lg" className="bg-body-primary">
          <Container fluid>
            <Navbar.Brand href="#">
                <h1>VIAJAR NUTRE EL ALMA</h1></Navbar.Brand>
            <div>
            <Button variant="secondary" onClick={ingresar}>Ingresar</Button>
            <Button variant="secondary" onClick={registrarse}>Registrarse</Button>
            </div>
          </Container>
        </Navbar>

        <CardInicio posteos={posteos}/>
        
      </>
    );
}

export { Inicio }