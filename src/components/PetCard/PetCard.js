import { useState } from "react";
import moment from "moment";

import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Card from 'react-bootstrap/Card';

import PetCardDeleteModal from "./PetCardDeleteModal";
import PetModal from "../PetModal";

import placeholderImg from "./images/placeholder.png";

const PetCard = ({ pet, onDelete, onEdit }) => {
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
        onDelete(pet);
        handleDeleteModalClose();
    }

    const handleSave = (pet) => {
        onEdit(pet);
        handleEditModalClose();
    }

    return (
        <>
            <Card className="h-100" style={{ width: '18rem' }}>
                <Card.Img
                    style={{ width: "100%", height: "300px", objectFit: "cover" }}
                    variant="top"
                    src={pet.imgFile || placeholderImg} />
                <Card.Body className="h-100">
                    <Card.Title>{pet.name}</Card.Title>
                    <Card.Text>{moment(pet.birthdate).utc().format("MM/DD/YYYY")}</Card.Text>
                    <Card.Text>{pet.weight > 0 ? pet.weight + " lbs" : ""}</Card.Text>
                    <Card.Text>{pet.description}</Card.Text>
                </Card.Body>
                <Card.Body style={{ marginBottom: "13px" }}>
                    <IconButton className="float-right" style={{ outline: "none" }} onClick={handleDeleteModalShow}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton className="float-right" style={{ outline: "none" }} onClick={handleEditModalShow}>
                        <EditIcon />
                    </IconButton>
                </Card.Body>
            </Card>
            <PetCardDeleteModal
                show={deleteModalShow}
                petName={pet.name}
                handleClose={handleDeleteModalClose}
                handleDelete={handleDelete} />
            <PetModal
                show={editModalShow}
                handleClose={handleEditModalClose}
                handleSubmit={handleSave}
                title={"Edit " + pet.name + "'s information"}
                pet={pet} />
        </>
    )
}

export default PetCard;