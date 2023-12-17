import { useState, useEffect } from 'react';
import {  Container, Navbar,  Nav, Card,  Button, FloatingLabel, Form   } from 'react-bootstrap';
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
    const [comentarios, setComentarios] = useState([]);

    const navigate = useNavigate();

    const Atras = () => {
        navigate('/usuario');
    }

    const traerDatos = async () => {
        const respuesta = await traerDatosDePosteoPorID(id);
        
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
        const url = 'http://localhost:3005/comentario';

        const datos = {
            comentario: miComentario,
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
                                <Card.Subtitle className="mb-2 text-muted">{autor}</Card.Subtitle> 
                            </div>
                        </Card>             
                     </div>
                    <br/>

                    {/*********** comentar ***********/}
                    <div style= {{display: 'flex', justifyContent: 'center'}}>
                    <Card label="Deje su comentario aquí" style={{ width: '70%' }}>
                        <p>Deje su comentario aquí</p>
                        <FloatingLabel controlId="floatingTextarea2" >
                            <Form.Control
                            onInput={(e) => setMiComentario(e.target.value)}
                            value={miComentario}
                            as="textarea"
                            />
                        </FloatingLabel>
                    </Card>
                    </div>
                    <Button variant="outline-secondary"onClick={enviarComentario}>Comentar</Button>
                        <br/>

                        {/*********** ver***********/}
                    {   
                    comentarios.map((comentario, key) =>(
                    <div className='contentComentarios' key={key}>
                            <Card>
                                <Card.Body>
                                    <Card.Title
                                    onInput={(e) => setComentarios(e.target.value)}
                                    value={comentario}> {comentario.comentario} </Card.Title>
                           
                                </Card.Body>
                                <span>
                                <Button variant="secondary" style={{width: '85px'}}>Editar</Button>
                                <Button variant="secondary"style={{width: '85px'}}>Eliminar</Button>
                                </span>
                            </Card>
                    </div>
                    ))
                    }
                    </> 
                )
}

export {VerPosteo};