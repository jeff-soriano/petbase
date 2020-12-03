import { useState } from "react";
import moment from "moment";

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const PetModal = ({ show, handleClose, handleSubmit, title, pet }) => {
    const defaultDate = moment(new Date()).format("YYYY-MM-DD");
    const defaultPet = {
        _id: 0, name: "", birthdate: defaultDate, description: "",
        imgFile: null, imgKey: ""
    };

    // Set default pet
    const [currentPet, setCurrentPet] = useState(defaultPet);

    const onShow = () => {
        if (pet) {
            setCurrentPet({
                _id: pet._id,
                name: pet.name,
                birthdate: pet.birthdate,
                description: pet.description,
                imgFile: pet.imgFile,
                imgKey: pet.imgKey
            })
        } else {
            setCurrentPet(defaultPet);
        }
    }

    const onHandleSubmit = (e) => {
        handleSubmit(currentPet);
        setCurrentPet(defaultPet);
        e.preventDefault();
        handleClose();
    }

    const onNameChange = (e) => setCurrentPet(prevPet => ({ ...prevPet, name: e.target.value }));
    const onBirthdateChange = (e) => setCurrentPet(prevPet => ({ ...prevPet, birthdate: e.target.value }));
    const onDescriptionChange = (e) => setCurrentPet(prevPet => ({ ...prevPet, description: e.target.value }));
    const onImgFileChange = (e) => setCurrentPet(prevPet => ({ ...prevPet, imgFile: e.target.files[0] }));

    return (
        <Modal show={show} onShow={onShow} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Form onSubmit={onHandleSubmit}>
                <Modal.Body>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control value={currentPet.name} onChange={onNameChange} type="text" placeholder="Name" required />
                    </Form.Group>
                    <Form.Group controlId="birthdate">
                        <Form.Label>Birthdate</Form.Label>
                        <Form.Control value={moment(currentPet.birthdate).format("YYYY-MM-DD")} onChange={onBirthdateChange} type="date" placeholder="Date" required />
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control value={currentPet.description} onChange={onDescriptionChange} as="textarea" placeholder="Description" />
                    </Form.Group>
                    <Form.Group controlId="image">
                        <Form.Label>Upload image</Form.Label>
                        <Form.File onChange={onImgFileChange} />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" type="button" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}

export default PetModal;