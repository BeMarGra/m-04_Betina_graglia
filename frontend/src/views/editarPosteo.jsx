import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";

import { Container, Navbar, Button, Form, Col, Row, Nav, Alert  } from 'react-bootstrap';

import {useAutContext} from "../context/autenticacionContex.jsx"
import { traerDatosDePosteoPorID }  from "../utils/llamados.js"

//*****   componente */

function EditarPosteo() {
    const { id } = useParams();
    const { token, usuario} = useAutContext();

    const url = 'http://localhost:3005/posteo'

    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [imagenURL, setImagenUrl] = useState('');
    const [deshabilitarBoton, setDeshabilitarBoton] = useState(false);
    const [errores, setErrores] = useState({});

    const navigate = useNavigate();

   

    const inicio = () => {
        navigate('/usuario')
    };

    const cambiarTitulo = (e) => {
        setTitulo(e.target.value);
    }

    const cambiarDescripcion = (e) => {
        setDescripcion(e.target.value);
    }

    const cambiarimagenURL = (e) => {
        setImagenUrl(e.target.value);
    }

    //*********  validaciones */

    const ValidarDatos = async () => {
        let misErrores = {}

        if (titulo.length === 0) {
            misErrores.titulo = 'Debe ingresar un título';
        }

        if (descripcion.length === 0) {
            misErrores.descripcion = 'Debe ingresar una descripción';
        }

        if (imagenURL.length === 0) {
            misErrores.imagenPosteo = 'Debe ingresar la url de la imágen del posteo';
        }

        setErrores(misErrores);

        if (Object.entries(misErrores).length === 0) {
        setDeshabilitarBoton(true)

        await EditarPosteo();
        }
    }

    //*******   Funcionalidad editar */

    const EditarPosteo = async () => {

        const datos = {
            id: id,
            titulo: titulo,
            descripcion: descripcion,
            imagenURL: imagenURL,
        }

        const headers = {
            token: token
        }

        try {
            const respuesta = await axios.put(url, datos, { headers: headers })
            
            if (respuesta.status === 200){
                return navigate('/usuario');
            }else {
                setErrores({error: 'Ocurrio un error al editar el posteo'})
            }
        } catch (error) {
            setErrores({error: 'Ocurrio un error interno'})
        }
        setDeshabilitarBoton(false);
    }

        //****    traer datos del posteo a editar */
    const traerDatosPosteo = async () =>{
 
        if (usuario) {
            const respuesta = await traerDatosDePosteoPorID(id)

            if( respuesta) {
                if(usuario.id !== respuesta.autor){
                    return navigate('/usuario')
                }

                setTitulo(respuesta.titulo)
                setDescripcion(respuesta.descripcion)
            } else {
                setErrores({ error: 'Ocurrió un error inesperado. No se pudo obtener la publicación' });
                setDeshabilitarBoton(true);
            }
        } else {
            return navigate('/usuario')
        }
    }

        useEffect(() => {
            traerDatosPosteo();
        }, [])

    //****  formulario renderizado */
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand>Editar posteo...</Navbar.Brand>
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
                <Form.Control type="text" placeholder="Ingrese un título para su publicación" onInput={cambiarTitulo} defaultValue={titulo}/>
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
                <Form.Control type="text" placeholder="Ingrese un breve comentario sobre su viaje" onInput={cambiarDescripcion} defaultValue={descripcion}/>
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
                <Form.Control type="text" placeholder="Ingrese la direccion URL de la imagen" onInput={cambiarimagenURL} defaultValue={imagenURL}/>
                {
                    errores.imagenURL && (<span style={{color: 'red'}}>{errores.imagenURL}</span>)
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
                Editar
            </Button>
            </div>
            </Form>
        </>
    )
}

export { EditarPosteo }