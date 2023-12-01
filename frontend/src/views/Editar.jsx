import { Container, Navbar, Button, Form, Col, Row, Nav  } from 'react-bootstrap';


function Editar() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand>Editar posteo...</Navbar.Brand>
                    <Nav.Link href="/usuario" className='navPosteo'>Inicio</Nav.Link>
                </Container>
            </Navbar>
            <br/>
            <Form className="formIngresar">
            <Form.Group as={Row} className="mb-3" type="text">
                <Form.Label column sm="2">
                    Titulo
                </Form.Label>
                <Col sm="10">
                <Form.Control type="text" placeholder="Ingrese un título para su publicación" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" >
                <Form.Label column sm="2">
                    Descripcion
                </Form.Label>
                <Col sm="10">
                <Form.Control type="text" placeholder="Ingrese un breve comentario sobre su viaje" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                    Foto
                </Form.Label>
                <Col sm="10">
                <Form.Control type="text" placeholder="Ingrese la direccion URL de la imagen" />
                </Col>
            </Form.Group>
            <br/>
            <div className='botonIngresar'>
            <Button variant="dark">Editar</Button>
            </div>
            
            </Form>
        </>
    )
}

export { Editar }