import { useState } from "react";
import moment from "moment";

import Card from 'react-bootstrap/Card';

import PetCardDeleteModal from "./PetCardDeleteModal";
import PetCardEditModal from "./PetCardEditModal";

import placeholderImg from "./images/placeholder.png";

const PetCard = ({ petId, petName, petBirthDate, petDescription, petImgUrl, petImgKey, onDelete, onEdit }) => {
    const [deleteModalShow, setDeleteModalShow] = useState(false);
    const [editModalShow, setEditModalShow] = useState(false);

    const handleDeleteModalClose = () => setDeleteModalShow(false);
    const handleEditModalClose = () => setEditModalShow(false);

    // Prevent default because withAuthenticationRequired will automatically load the page
    // which will get rid of the modal
    const handleDeleteModalShow = (e) => {
        setDeleteModalShow(true);
        e.preventDefault();
    }

    const handleEditModalShow = (e) => {
        setEditModalShow(true);
        e.preventDefault();
    };

    const handleDelete = () => {
        onDelete(petId, petImgKey);
        handleDeleteModalClose();
    }

    const handleSave = (id, name, birthdate, description, imgFile, petImgKey) => {
        onEdit(id, name, birthdate, description, imgFile, petImgKey);
        handleEditModalClose();
    }

    return (
        <>
            <Card className="h-100" style={{ width: '18rem' }}>
                <Card.Img
                    style={{ width: "100%", height: "300px", objectFit: "cover" }}
                    variant="top"
                    src={petImgUrl === "" ? placeholderImg : petImgUrl} />
                <Card.Body className="h-100">
                    <Card.Title>{petName}</Card.Title>
                    <Card.Text>{moment(petBirthDate).utc().format("MM/DD/YYYY")}</Card.Text>
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
                id={petId}
                initName={petName}
                initBirthdate={petBirthDate}
                initDescription={petDescription}
                petImgKey={petImgKey} />
        </>
    )
}

export default PetCard;