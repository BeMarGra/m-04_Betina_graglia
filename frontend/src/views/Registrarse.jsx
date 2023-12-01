import { Container, Navbar, Button, Form, Col, Row, Nav } from 'react-bootstrap';


function Registrarse() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand>Ingresar...</Navbar.Brand>
                    <Nav.Link href="/" className='navPosteo'>Inicio</Nav.Link>
                </Container>
            </Navbar>
            <br/>
            <Form className="formIngresar">
            <Form.Group as={Row} className="mb-3" type="text">
                <Form.Label column sm="2">
                Uruario
                </Form.Label>
                <Col sm="10">
                <Form.Control type="text" placeholder="Ingrese un nombre de usuario" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                Email
                </Form.Label>
                <Col sm="10">
                <Form.Control type="email" placeholder="Ingrese una direccion de Email" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3"  controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                Contraseña
                </Form.Label> 
                <Col sm="10">
                <Form.Control type="password"  />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                Img. Perfil
                </Form.Label>
                <Col sm="10">
                <Form.Control type="text" placeholder="Ingrese la direccion URL de la imagen" />
                </Col>
            </Form.Group>
            <br/>
            <div className='botonIngresar'>
            <Button variant="dark">Registrarse</Button>
            </div>
            
            </Form>
        </>
    )
}

export { Registrarse }