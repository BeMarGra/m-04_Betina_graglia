import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';

import { Container, Navbar, Button, Form, Col, Row, Nav } from 'react-bootstrap';

function Registrarse() {
    const navigate = useNavigate();

    const inicio = () => {
        navigate('/')
    };
    
    const [usuario, setUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPaswword] = useState('');
    const [imagenUsuario, setImgUsuario] = useState('');
    const [deshabilitarBoton, setDeshabilitarBoton] = useState(false);
    const [errores, setErrores] = useState({});

    const cambiarUsuario = (e) => {
        setUsuario(e.target.value);
    }

    const cambiarEmail = (e) => {
        setEmail(e.target.value);
    }

    const cambiarPaswword = (e) => {
        setPaswword(e.target.value);
    }

    const cambiarImgUsuario = (e) => {
        setImgUsuario(e.target.value);
    }
    
    const ValidarDatos = async () => {
        let misErrores = {}

        if (usuario.length === 0) {
            misErrores.usuario = 'Debe ingresar un nombre de usuario';
        }

        if (email.length === 0) {
            misErrores.email = 'Debe ingresar una direccion de mail';
        }

        if (password.length === 0) {
            misErrores.password = 'Debe ingresar una contraseña';
        }

        if (imagenUsuario.length === 0) {
            misErrores.imagenUsuario = 'Debe ingresar la url de su imágen de usuario';
        }
        
        setErrores(misErrores);

        if (Object.entries(misErrores).length === 0) {
            setDeshabilitarBoton(true)

        await realizarRegistro();
        }
    }

    const realizarRegistro = async () => {
        const url = 'http://localhost:3005/usuario'
        const datos = {
            username: usuario,
            password: email,
            email : password,
            avatarURL: imagenUsuario
        }
        try {
            const respuesta = await axios.post(url, datos)
        
            if (respuesta.status === 200){
                return navigate('/usuario');
            }else {
                setErrores({error: 'Ocurrio un error'})
            }
        } catch (error) {
            setErrores({error: 'Ocurrio un error'})
        }
        setDeshabilitarBoton(false);
    }

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand>Ingresar...</Navbar.Brand>
                    <Nav.Link className='navPosteo' onClick={inicio}>Inicio</Nav.Link>
                </Container>
            </Navbar>
            <br/>
            <Form className="formIngresar">
            <Form.Group as={Row} className="mb-3" type="text">
                <Form.Label column sm="2">
                Uruario
                </Form.Label>
                <Col sm="10">
                <Form.Control type="text" placeholder="Ingrese un nombre de usuario" onInput={cambiarUsuario}/>
                {
                    errores.usuario && (<span style={{color: 'red'}}>{errores.usuario}</span>)
                }
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                Email
                </Form.Label>
                <Col sm="10">
                <Form.Control type="email" placeholder="Ingrese una direccion de Email" onInput={cambiarEmail}/>
                {
                    errores.email && (<span style={{color: 'red'}}>{errores.email}</span>)
                }
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3"  controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                Contraseña
                </Form.Label> 
                <Col sm="10">
                <Form.Control type="password" placeholder="Ingrese su contraseña" onInput={cambiarPaswword} />
                {
                    errores.password && (<span style={{color: 'red'}}>{errores.password}</span>)
                }
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                Img. Perfil
                </Form.Label>
                <Col sm="10">
                <Form.Control type="text" placeholder="Ingrese la direccion URL de la imagen" onInput={cambiarImgUsuario}/>
                {
                    errores.imagenUsuario && (<span style={{color: 'red'}}>{errores.imagenUsuario}</span>)
                }
                </Col>
            </Form.Group>
            <br/>
            <div className='botonIngresar'>
            <Button variant="dark" onClick={ValidarDatos} disabled={false}>
                Registrarse
            </Button>
            </div>
            
            </Form>
        </>
    )
}

export { Registrarse }