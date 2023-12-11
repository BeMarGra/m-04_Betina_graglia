import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

import { Container, Navbar, Button, Form, Col, Row, Nav } from 'react-bootstrap';


function Ingresar() {

    const navigate = useNavigate();
    const navigate2 = useNavigate();

    const inicio = () => {
        navigate('/')
    };

    const ingresar = () => {
        navigate2('/usuario')
    };

    const [email, setEmail] = useState('');
    const [password, setPaswword] = useState('');

    const cambiarEmail = (e) => {
        setEmail(e.target.value);
    }

    const cambiarPaswword = (e) => {
        setPaswword(e.target.value);
    }

    const realizarIngreso = () => {
        console.log(email);
        console.log(password);
    }

    useEffect(() => {
        realizarIngreso();
    },[])

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
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                Password
                </Form.Label>
                <Col sm="10">
                <Form.Control type="password" placeholder="Password" onInput={cambiarPaswword}/>
                </Col>
            </Form.Group>
            <br/>
            <div className='botonIngresar'>
            <Button variant="dark" onClick={realizarIngreso, ingresar}>Entrar</Button>
            </div>
            
            </Form>
        </>
    )
}

export { Ingresar }