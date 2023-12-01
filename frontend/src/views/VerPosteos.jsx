import { Container, Navbar, Button, Form, Col, Row, Nav, Image, Card,  } from 'react-bootstrap';
import { CardPosteo } from './../components/CardPosteo.jsx'

function VerPosteos() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand>Lista de posteos...</Navbar.Brand>
                    <Nav.Link href="/usuario" className='navPosteo'>Inicio</Nav.Link>
                </Container>
            </Navbar>
            <div className='cardedicion'>
            <CardPosteo />
                <div>
                    <Button variant="secondary" href='/editar'>Editar</Button>
                    <Button variant="secondary">Eliminar</Button>
                </div>
            </div>
            <br/>
            
        </>
    )
}

export { VerPosteos }