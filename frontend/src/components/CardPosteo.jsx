import { Card, Row, Col, Button, CardGroup } from 'react-bootstrap';

const CardPosteo = (props) =>{
    const { posteos } = props;

    return (
        <div className='contenedorCards'>
        {
            
            posteos.map((item, key) => (
                
                    <Card key={key} className='cardUsuarios'>
                        <Card.Img variant="top" src="holder.js/100px160" value={posteos.imagenURL}/>
                        <Card.Body>
                        <Card.Title>{item.titulo}</Card.Title>
                        <Card.Text>
                            {item.descripcion}
                        </Card.Text>
                        </Card.Body>
                    </Card>
            )
            )    
        }      
        </div>
    )
 }
export default CardPosteo 