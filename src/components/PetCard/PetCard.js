import { useState } from "react";
import moment from "moment";

import Card from 'react-bootstrap/Card';

import PetCardDeleteModal from "./PetCardDeleteModal";
import PetCardEditModal from "./PetCardEditModal";

const PetCard = ({ petId, petName, petBirthDate, petDescription, onDelete }) => {
    const [deleteModalShow, setDeleteModalShow] = useState(false);
    const [editModalShow, setEditModalShow] = useState(false);

    const handleDeleteModalClose = () => setDeleteModalShow(false);
    const handleDeleteModalShow = () => setDeleteModalShow(true);

    const handleEditModalClose = () => setEditModalShow(false);
    const handleEditModalShow = () => setEditModalShow(true);

    const handleDelete = () => {
        onDelete(petId);
        handleDeleteModalClose();
    }

    const handleSave = () => {
        handleEditModalClose();
    }

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="" />
                <Card.Body>
                    <Card.Title>{petName}</Card.Title>
                    <Card.Text>{moment(petBirthDate).format("MM/DD/YYYY")}</Card.Text>
                    <Card.Text>{petDescription}</Card.Text>
                </Card.Body>
                <Card.Body>
                    <Card.Link href="#" onClick={handleEditModalShow}>Edit</Card.Link>
                    <Card.Link href="#" onClick={handleDeleteModalShow}>Delete</Card.Link>
                </Card.Body>
            </Card>
            <PetCardDeleteModal
                show={deleteModalShow}
                petName={petName}
                handleClose={handleDeleteModalClose}
                handleDelete={handleDelete} />
            <PetCardEditModal
                show={editModalShow}
                handleClose={handleEditModalClose}
                handleSave={handleSave}
                initName={petName}
                initBirthdate={petBirthDate}
                initDescription={petDescription} />
        </>
    )
}

export default PetCard;