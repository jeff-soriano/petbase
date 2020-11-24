import { useState } from "react";

import Card from 'react-bootstrap/Card';

import PetCardDeleteModal from "./PetCardDeleteModal";

const PetCard = ({ petId, petName, petBirthDate, petDescription, onDelete }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = () => {
        onDelete(petId);
        handleClose();
    }

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="" />
                <Card.Body>
                    <Card.Title>{petName}</Card.Title>
                    <Card.Text>{petBirthDate}</Card.Text>
                    <Card.Text>{petDescription}</Card.Text>
                </Card.Body>
                <Card.Body>
                    <Card.Link href="#">Edit</Card.Link>
                    <Card.Link href="#" onClick={handleShow}>Delete</Card.Link>
                </Card.Body>
            </Card>
            <PetCardDeleteModal
                show={show}
                petName={petName}
                handleClose={handleClose}
                handleDelete={handleDelete} />
        </>
    )
}

export default PetCard;