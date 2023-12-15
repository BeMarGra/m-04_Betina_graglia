import { useNavigate } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';

const MiPosteo = (props) =>{
    const { posteos, usuario } = props;

    const navigate = useNavigate();
    const navigate2 = useNavigate();
    const navigate3 = useNavigate();

    const editar = (id) => {
        navigate('/editar/' + id)
    };
    const eliminar = (id) => {
        navigate2('/eliminar/' + id);
    };
    const ver = (id) => {
        navigate3('/posteo/' + id);
    };

    return (
        <>
            {
                posteos.map((item, key) =>(
                        <Card key={key} className="cardVerPosteos">
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                            <Card.Title>{item.titulo}</Card.Title>
                            <Card.Title></Card.Title>
                            <Card.Text>
                            {item.descripcion}
                            </Card.Text>
                            </Card.Body>
                            <Card.Subtitle className="mb-2 text-muted">{item.autor.username}</Card.Subtitle>
                            <div>
                            <Button variant="secondary" onClick={() => ver(item._id)}>Ver</Button>
                           {
                                usuario && (usuario.id === item.autor._id) && (
                                    <>
                                    
                                        <Button variant="secondary" onClick={() => editar(item._id)}>Editar</Button>
                                        <Button variant="secondary" onClick={() => eliminar(item._id)}>Eliminar</Button>
                                    
                                    </>
                                )
                            }
                             </div> 
                        </Card>
                    )
                )
            }
        </>
    );
}

export { MiPosteo } 