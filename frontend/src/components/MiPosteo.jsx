import { useNavigate } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';

const MiPosteo = (props) =>{
    const { posteos } = props;

    const navigate = useNavigate();
    const navigate2 = useNavigate();

    const editar = (id) => {
        navigate('/editar')
    };
    const eliminar = (_id) => {
        navigate2('/eliminar/' + _id);
    };

    return (
        <>
            {
                posteos.map((item, key) =>(
                        <Card key={key}>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                            <Card.Title>{item.titulo}</Card.Title>
                            <Card.Title>{item.id}</Card.Title>
                            <Card.Text>
                            {item.descripcion}
                            </Card.Text>
                            </Card.Body>
                            <Card.Subtitle className="mb-2 text-muted">{item.autor}</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">{item.createAt}</Card.Subtitle>
                            <div>
                                <Button variant="secondary" onClick={() => editar(item.id)}>Editar</Button>
                                <Button variant="secondary" onClick={() => eliminar(item._id)}>Eliminar</Button>
                            </div>     
                        </Card>
                    )
                )
            }
        </>
    );
}

export { MiPosteo } 