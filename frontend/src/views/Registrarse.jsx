import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
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

    const realizarRegistro = () => {

        console.log(usuario);
        console.log(email);
        console.log(password);
        console.log(imagenUsuario);
    }

    // useEffect(() => {
    //     realizarRegistro();
    // },[])

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
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                Email
                </Form.Label>
                <Col sm="10">
                <Form.Control type="email" placeholder="Ingrese una direccion de Email" onInput={cambiarEmail}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3"  controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                Contraseña
                </Form.Label> 
                <Col sm="10">
                <Form.Control type="password" placeholder="Ingrese su contraseña" onInput={cambiarPaswword} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                Img. Perfil
                </Form.Label>
                <Col sm="10">
                <Form.Control type="text" placeholder="Ingrese la direccion URL de la imagen" onInput={cambiarImgUsuario}/>
                </Col>
            </Form.Group>
            <br/>
            <div className='botonIngresar'>
            <Button variant="dark" onClick={realizarRegistro} disabled={false}>
                Registrarse
            </Button>
            </div>
            
            </Form>
        </>
    )
}

export { Registrarse }