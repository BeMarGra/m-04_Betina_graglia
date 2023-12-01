import { Container, Navbar, Button, Form, Col, Row, Nav, Image, Card,  } from 'react-bootstrap';
import { CardPosteo } from './../components/CardPosteo.jsx'

function Usuario() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
                <Container>
                        <div className='bienvenido'>
                            <Navbar.Brand>Bienvenido  </Navbar.Brand>
                        <br/>
                            <div className='navUsuario'>
                                <Nav.Link href="/nuevoposteo">Nuevo Posteo</Nav.Link>
                                <Nav.Link href="/verposteos">Ver Posteos</Nav.Link>
                                <Nav.Link href="#home">Salir</Nav.Link>
                            </div>
                        </div>
                        <Col xs={6} md={4}>
                            <Image src="holder.js/171x180" thumbnail />
                        </Col>
                </Container>
            </Navbar>
            <CardPosteo />
            <br/>
            
        </>
    )
}

export { Usuario }