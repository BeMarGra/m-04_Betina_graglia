import { useNavigate, useParams } from "react-router-dom";
import { useState, } from "react";
import axios from 'axios';

import { Container, Navbar, Nav, Alert, Button, } from 'react-bootstrap';


function Eliminar() {
    const [errores, setErrores] = useState(false);

    const navigate = useNavigate();
    const navigate2 = useNavigate();

    const { id } = useParams();

    const inicio = () => {
        navigate('/usuario')
    };

    const eliminarPosteo = async () =>{
        setErrores(false);

        try {
            const url = 'http://localhost:3005/posteo';
            const respuesta = await axios.delete(url, {data: {id: id } });

            if (respuesta.status === 200) {
                return navigate2('/usuario');
            } else {
                setErrores('Ocurrio un error al borrar el posteo')
            }
        } catch(error) {
            setErrores('Ocurrio un error interno')
            
        }
    }

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand>Eliminar posteo...</Navbar.Brand>
                    <Nav.Link className='navPosteo' onClick={inicio}>Inicio</Nav.Link>
                </Container>
            </Navbar>
            <br/>
            <Alert variant="light">
                Esta seguro que desea eliminar esta publicación?
            </Alert>
            {
                errores && ( 
                <Alert variant="light">
                    {errores}
                </Alert> )
            }
            <br/>
            <div className='botonEliminar'>
            <Button variant="dark" onClick={eliminarPosteo}>Eliminar</Button>
            </div>
        </>
    )
}

export { Eliminar }