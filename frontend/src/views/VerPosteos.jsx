import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"; 

import { Container, Navbar, Nav } from 'react-bootstrap';
import { MiPosteo } from './../components/MiPosteo.jsx';

function VerPosteos() {

    const navigate = useNavigate();

    const inicio = () => {
        navigate('/usuario')
    };
    
    const [posteos, setPosteos] = useState([])

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
      }, [])

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand>Lista de posteos...</Navbar.Brand>
                    <Nav.Link className='navPosteo' onClick={inicio} >Inicio</Nav.Link>
                </Container>
            </Navbar>
            <br/>
            <div className='cardedicion'>
                <MiPosteo posteos={posteos}/>  
            </div>

        </>
    )
}

export { VerPosteos }