import { Container, Navbar, Button, Form, Col, Row, Nav } from 'react-bootstrap';


function Ingresar() {
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
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                Email
                </Form.Label>
                <Col sm="10">
                <Form.Control plaintext readOnly defaultValue="email@example.com" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                Password
                </Form.Label>
                <Col sm="10">
                <Form.Control type="password" placeholder="Password" />
                </Col>
            </Form.Group>
            <br/>
            <div className='botonIngresar'>
            <Button variant="dark">Entrar</Button>
            </div>
            
            </Form>
        </>
    )
}

export { Ingresar }