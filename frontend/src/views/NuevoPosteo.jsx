import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Container, Navbar, Button, Form, Col, Row, Nav, Alert  } from 'react-bootstrap';


function NuevoPosteo() {
    const navigate = useNavigate();

    const inicio = () => {
        navigate('/usuario')
    };

    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [imagenPosteo, setImgPosteo] = useState('');
    const [deshabilitarBoton, setDeshabilitarBoton] = useState(false);
    const [errores, setErrores] = useState({});

    const cambiarTitulo = (e) => {
        setTitulo(e.target.value);
    }

    const cambiarDescripcion = (e) => {
        setDescripcion(e.target.value);
    }

    const cambiarImgPosteo = (e) => {
        setImgPosteo(e.target.value);
    }

    const ValidarDatos = async () => {
        let misErrores = {}

        if (titulo.length === 0) {
            misErrores.titulo = 'Debe ingresar un título';
        }

        if (descripcion.length === 0) {
            misErrores.descripcion = 'Debe ingresar una descripción';
        }

        if (imagenPosteo.length === 0) {
            misErrores.imagenPosteo = 'Debe ingresar la url de la imágen del posteo';
        }

        setErrores(misErrores);

        if (Object.entries(misErrores).length === 0) {
        setDeshabilitarBoton(true)

        await realizarPosteo();
        }
    }

    const realizarPosteo = async () => {
        const url = 'http://localhost:3005/posteo'
        const datos = {
            titulo: titulo,
            descripcion: descripcion,
            imagenPosteo: imagenPosteo
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
                    <Navbar.Brand>Crear nuevo posteo...</Navbar.Brand>
                    <Nav.Link className='navPosteo' onClick={inicio}>Inicio</Nav.Link>
                </Container>
            </Navbar>
            <br/>
            <Form className="formIngresar">
            <Form.Group as={Row} className="mb-3" type="text">
                <Form.Label column sm="2">
                    Titulo
                </Form.Label>
                <Col sm="10">
                <Form.Control type="text" placeholder="Ingrese un título para su publicación" onInput={cambiarTitulo}/>
                {
                    errores.titulo && (<span style={{color: 'red'}}>{errores.titulo}</span>)
                }
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" >
                <Form.Label column sm="2">
                    Descripcion
                </Form.Label>
                <Col sm="10">
                <Form.Control type="text" placeholder="Ingrese un breve comentario sobre su viaje" onInput={cambiarDescripcion}/>
                {
                    errores.descripcion && (<span style={{color: 'red'}}>{errores.descripcion}</span>)
                }
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                    Foto
                </Form.Label>
                <Col sm="10">
                <Form.Control type="text" placeholder="Ingrese la direccion URL de la imagen" onInput={cambiarImgPosteo}/>
                {
                    errores.imagenPosteo && (<span style={{color: 'red'}}>{errores.imagenPosteo}</span>)
                }
                </Col>
            </Form.Group>
            {
                errores.error && (
                    <Alert  variant={'dark'}>
                        {errores.error}
                    </Alert>)
            }
            
            <br/>
            <div className='botonIngresar'>
            <Button variant="dark" onClick={ValidarDatos} disabled={deshabilitarBoton}>
                Publicar
            </Button>
            </div>
            </Form>
        </>
    )
}

export { NuevoPosteo }