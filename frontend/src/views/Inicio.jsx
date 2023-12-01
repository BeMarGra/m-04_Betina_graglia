import { Container, Navbar, Button, ListGroup  } from 'react-bootstrap';

const Inicio = () => {
    return (
    <>
    <Navbar expand="lg" className="bg-body-primary">
      <Container fluid>
        <Navbar.Brand href="#">
            <h1>VIAJAR NUTRE EL ALMA</h1></Navbar.Brand>
        <div>
        <Button variant="secondary" href='/ingresar'>Ingresar</Button>
        <Button variant="secondary" href='/registro'>Registrarse</Button>
        </div>
      </Container>
    </Navbar>
    <ListGroup>
      <ListGroup.Item>Titulo posteo</ListGroup.Item>
      <ListGroup.Item>Titulo posteo</ListGroup.Item>
      <ListGroup.Item>Titulo posteo</ListGroup.Item>
      <ListGroup.Item>Titulo posteo</ListGroup.Item>
    </ListGroup>
    </>
    );
}

export { Inicio }