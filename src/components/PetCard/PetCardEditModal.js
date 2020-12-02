import { useState } from "react";
import moment from "moment";

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const PetCardEditModal = ({ show, handleClose, handleSave,
    id, initName, initBirthdate, initDescription, petImgKey }) => {

    const [name, setName] = useState("");
    const [birthdate, setBirthdate] = useState(new Date());
    const [description, setDescription] = useState("");
    const [imgFile, setImgFile] = useState(null);

    const initModal = (name, birthdate, description) => {
        setName(name);
        setBirthdate(moment(birthdate).utc().format("YYYY-MM-DD"));
        setDescription(description);
        setImgFile(null);
    }

    const onNameChange = (e) => setName(e.target.value);
    const onBirthdateChange = (e) => setBirthdate(e.target.value);
    const onDescriptionChange = (e) => setDescription(e.target.value);
    const onImgFileChange = (e) => setImgFile(e.target.files[0]);

    return (
        <Modal show={show} onHide={handleClose} animation={false}
            onShow={() => initModal(initName, initBirthdate, initDescription)}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Edit {initName}'s information
                    </Modal.Title>
            </Modal.Header>
            <Form>
                <Modal.Body>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control value={name} onChange={onNameChange} type="text" placeholder="Name" required />
                    </Form.Group>
                    <Form.Group controlId="birthdate">
                        <Form.Label>Birthdate</Form.Label>
                        <Form.Control value={birthdate} onChange={onBirthdateChange} type="date" placeholder="Date" required />
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control value={description} onChange={onDescriptionChange} type="text" placeholder="Description" required />
                    </Form.Group>
                    <Form.Group controlId="image">
                        <Form.Label>Upload image</Form.Label>
                        <Form.File onChange={onImgFileChange} />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" type="button" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" type="button"
                        onClick={() => handleSave(id, name, birthdate, description, imgFile, petImgKey)}>
                        Save changes
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}

export default PetCardEditModal;