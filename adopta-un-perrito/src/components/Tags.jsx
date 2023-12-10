import Badge from 'react-bootstrap/Badge';

export default function Tags({texto,color}){

    return(
        <>
            <Badge pill bg={color}>{texto}</Badge>
        </>
    );
}