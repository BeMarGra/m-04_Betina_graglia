import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from "axios";

import { useAutContext } from "../context/autenticacionContex";

import { Container, Navbar, Button, Form, Col, Row, Nav, Alert } from 'react-bootstrap';

const Ingresar = () => {

    const navigate = useNavigate();
    const navigate2 = useNavigate();

    const inicio = () => {
        navigate('/')
    };

    const [email, setEmail] = useState('');
    const [password, setPaswword] = useState('');
    const [deshabilitarBoton, setDeshabilitarBoton] = useState(false);
    const [errores, setErrores] = useState({});

    const { abrirSecion } = useAutContext();

    const cambiarEmail = (e) => {
        setEmail(e.target.value);
    }

    const cambiarPaswword = (e) => {
        setPaswword(e.target.value);
    }

    const realizarLogin = async () =>{

        const url = 'http://localhost:3005/autenticar'
        const datos = {
            email : email,
            password: password,
    }
        try {
            const respuesta = await axios.post(url, datos)
        
            if (respuesta.status === 200){
                const {token, datos} = respuesta.data;

                abrirSecion(datos, token);
                navigate2('/usuario');

            }else {
                setErrores({error: 'Los datos no corresponden a un usuario registrado'})
            }
        } catch (error) {
            setErrores({error: 'Ocurrio un error interno'})
        }
        setDeshabilitarBoton(false);
    }

    const ValidarDatos = async () => {
        let misErrores = {}

        if (email.length === 0) {
            misErrores.email = 'Debe ingresar una direccion de mail';
        }

        if (password.length === 0) {
            misErrores.password = 'Debe ingresar una contraseña';
        }
        
        setErrores(misErrores);

        if (Object.entries(misErrores).length === 0) {
            setDeshabilitarBoton(true)

        await realizarLogin();
        }

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
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                Email
                </Form.Label>
                <Col sm="10">
                <Form.Control type= "email" placeholder="email@example.com" onInput={cambiarEmail}/>
                {
                    errores.email && (<span style={{color: 'red'}}>{errores.email}</span>)
                }
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                Password
                </Form.Label>
                <Col sm="10">
                <Form.Control type="password" placeholder="Password" onInput={cambiarPaswword}/>
                {
                    errores.password && (<span style={{color: 'red'}}>{errores.password}</span>)
                }
                </Col>
            </Form.Group>
            <br/>
            {
            errores.error && (<Alert variant="warning">{errores.error}</Alert>)
            }      
            <div className='botonIngresar'>
            <Button variant="dark" onClick={ValidarDatos} defaultValue={deshabilitarBoton}>Entrar</Button>
            </div>
            
            </Form>
        </>
    )
}

export { Ingresar }