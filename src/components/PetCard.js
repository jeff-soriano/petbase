import Card from 'react-bootstrap/Card';

const PetCard = ({ petId, petName, petBirthDate, petDescription, onDelete }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
                <Card.Title>{petName}</Card.Title>
                <Card.Text>{petBirthDate}</Card.Text>
                <Card.Text>{petDescription}</Card.Text>
            </Card.Body>
            <Card.Body>
                <Card.Link href="#">Edit</Card.Link>
                <Card.Link href="#" onClick={() => onDelete(petId)}>Delete</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default PetCard;