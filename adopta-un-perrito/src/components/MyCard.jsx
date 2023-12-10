import Card from 'react-bootstrap/Card';
import Tags from './Tags';


export default function MyCard({imagen,nombre,descripcion,tagColor,tagTexto}){
    return(
    <>
        <Card style={{ width: '18rem' }} className="mx-auto my-2">
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
            <Card.Title><b>{nombre}</b></Card.Title>
            <Card.Text>{descripcion}</Card.Text>
            <Tags color={tagColor} texto={tagTexto}></Tags>
        </Card.Body>
        </Card>     
    </>
    )
}