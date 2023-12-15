import { useState, useEffect } from 'react';
import {  Container, Navbar,  Nav, Card, Accordion, Button, FloatingLabel, Form   } from 'react-bootstrap';
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

import { useAutContext} from '../context/autenticacionContex.jsx';

import {
    traerDatosDePosteoPorID,
    traerComentariosDePosteoPorID,
} from './../utils/llamados.js';

const VerPosteo = () => {
    const { id } = useParams();
    const { token } = useAutContext();
    

    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [autor, setAutor] = useState('{}');
    const [miComentario, setMiComentario] = useState('');
    const [comentario, setComentarios] = useState([]);

    const navigate = useNavigate();

    const Atras = () => {
        navigate('/usuario');
    }

    const traerDatos = async () => {
        const respuesta = await traerDatosDePosteoPorID(id);
        console.log (respuesta)
        if (respuesta) {
            
            setTitulo(respuesta.titulo);
            setDescripcion(respuesta.descripcion);
            setAutor(respuesta.autor);

            await traerComentarios();

        } else {
            console.log('No se encontró una publicación' );
        }
    }

    const traerComentarios = async () => {
        const respuesta = await traerComentariosDePosteoPorID(id);
        if (respuesta) {
            setComentarios(respuesta);
     
        } else {
            console.log('No se pudo obtener los comentarios de la publicación');
        }
    }

    const enviarComentario = async () => {
        const url = 'http://localhost:3000/comentarios';

        const datos = {
            descripcion: miComentario,
            idPosteo: id,
        }

        const headers = {
            token: token
        }

        try {
            const respuesta = await axios.post(url, datos, { headers: headers });

            if (respuesta.status === 200) {
                setMiComentario('');

                await traerComentarios();
            } else {
                console.log({ error: 'Ocurrió un error inesperado' });
            }
        } catch (error) {
            console.log({ error: 'Ocurrió un error inesperado' });
        }
    }

    useEffect(() => {
        traerDatos();
    }, []);

    return (
                <>
                    {/*********** encabezado ***********/}
                     <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
                     <Container>
                         <Navbar.Brand>Posteo...</Navbar.Brand>
                         <Nav.Link className='navPosteo' onClick={Atras}>Atras</Nav.Link>
                     </Container>
                     </Navbar>
                     <br/>
                     {/*********** posteo ***********/}
                     <div className='content'>
                        <Card className="cardVerUnPosteo">
                            <div className="cardVerUnPosteoImg">
                                <Card.Img variant="top" src="holder.js/100px160" />
                            </div>
                            <div className="cardVerUnPosteoTxt">
                                <Card.Body>
                                <Card.Title>{titulo}</Card.Title>
                                <Card.Title></Card.Title>
                                <Card.Text>
                                {descripcion}
                                </Card.Text>
                                </Card.Body>
                                <Card.Subtitle className="mb-2 text-muted">{autor.username}</Card.Subtitle> 
                            </div>
                        </Card>             
                     </div>
                    <br/>

                    {/*********** comentar ***********/}
                    <div style= {{display: 'flex', justifyContent: 'center'}}>
                    <Card label="Deje su comentario aquí" style={{ width: '70%',  }}>
                        <p>Deje su comentario aquí</p>
                        <FloatingLabel controlId="floatingTextarea2" >
                            <Form.Control
                            onInput={(e) => setMiComentario(e.target.value)}
                            value={miComentario}
                            as="textarea"
                            style={{ height: 'auto'}}
                            />
                        </FloatingLabel>
                    </Card>
                    </div>
                    <Button variant="outline-secondary"onClick={enviarComentario}>Comentar</Button>
                        <br/>

                        {/*********** ver***********/}
                    {   
                    comentario.map((comentario, key) =>(
                    <div className='contentComentarios' key={key}>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>{comentario.autor.username}</Accordion.Header>
                                    <Accordion.Body>
                                        <p>
                                        {comentario.descripcion}
                                        </p>
                                        <br/>
                                        <div>
                                            <Button variant="secondary" onClick={() => editar(item._id)}>Editar</Button>
                                            <Button variant="secondary" onClick={() => eliminar(item._id)}>Eliminar</Button>
                                        </div>
                                </Accordion.Body>
                            
                            </Accordion.Item>

                            </Accordion>
                    </div>
                    ))
                    }
                    </> 
                )
}

export {VerPosteo};