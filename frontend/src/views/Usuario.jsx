import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"; 

import { Container, Navbar, Col, Nav, Image, } from 'react-bootstrap';

import {CardPosteo} from './../components/CardPosteo.jsx'

function Usuario() {
    const navigate = useNavigate();
    const navigate2 = useNavigate();
    const navigate3 = useNavigate();

    const nuevoposteo = () => {
        navigate('/nuevoposteo');
    }

    const verposteos = () => {
        navigate2('/verposteos');
    }

    const salir = () => {
        navigate3('/');
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
                        <div className='bienvenido'>
                            <Navbar.Brand>Bienvenido  </Navbar.Brand>
                        <br/>
                            <div className='navUsuario'>
                                <Nav.Link onClick={nuevoposteo}>Nuevo Posteo</Nav.Link>
                                <Nav.Link onClick={verposteos}>Ver Posteos</Nav.Link>
                                <Nav.Link onClick={salir}>Salir</Nav.Link>
                            </div>
                        </div>
                        <Col xl={6} md={4}>
                            <Image src="holder.js/171x180" thumbnail />
                        </Col>
                </Container>
            </Navbar>
            <br/>
            <CardPosteo posteos={posteos}/>
        </>
    );
}

export { Usuario }