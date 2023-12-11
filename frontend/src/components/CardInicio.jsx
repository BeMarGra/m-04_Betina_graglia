import {Card } from 'react-bootstrap';

const CardInicio = (props) =>{
    const { posteos } = props;

    return (
        <>
        {
            posteos.map((item, key) => (
                <Card className='posteoInicio' key={key}>  
                    <Card.Body >
                        <Card.Title>{item.titulo}</Card.Title>
                    </Card.Body>
                </Card>
                )
            )
        }
        </>
        
    );
}


export default CardInicio

