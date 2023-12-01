import { Card, Button } from 'react-bootstrap';

const CardPosteo = () =>{
    return (
        <>
            <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Titulo</Card.Title>
                    <Card.Text>
                        Descripcion
                    </Card.Text>
                    <Card.Text>
                        Autor
                    </Card.Text>
                    <Card.Text>
                        Fecha de creacion
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
        
    );
}

export { CardPosteo }