import { useState } from "react";

import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

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
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Are you sure you want to delete {petName}'s information?
                    </Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="secondary" type="button" onClick={handleClose}>
                        No, do not delete this
                    </Button>
                    <Button variant="danger" type="button" onClick={handleDelete}>
                        Yes, delete this
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default PetCard;