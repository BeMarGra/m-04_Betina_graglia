import { Card, Row, Col, Button } from 'react-bootstrap';

const CardPosteo = (props) =>{
    const { posteos } = props;

    return (
        <>
        {   
          posteos.map((item, key) => (
                    <Card key={key}>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                        <Card.Title>{item.titulo}</Card.Title>
                        <Card.Text>
                        {item.descripcion}
                        </Card.Text>
                        </Card.Body>
                        <Card.Subtitle className="mb-2 text-muted">{item.autor}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">{item.createAt}</Card.Subtitle>     
                    </Card>
                )
            )          
        }
        </>
        
    );
}

export { CardPosteo }