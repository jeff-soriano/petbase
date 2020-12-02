import { useState } from "react";
import moment from "moment";

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AddPetModal = ({ show, handleClose, handleSubmit }) => {
    const defaultDate = moment(new Date()).format("YYYY-MM-DD");

    const [name, setName] = useState("");
    const [birthdate, setBirthdate] = useState(defaultDate);
    const [description, setDescription] = useState("");
    const [imgFile, setImgFile] = useState(null);

    const onHandleSubmit = (e) => {
        handleSubmit(name, birthdate, description, imgFile);
        setName("");
        setBirthdate(defaultDate);
        setDescription("");
        setImgFile(null);
        e.preventDefault();
        handleClose();
    }

    const onNameChange = (e) => setName(e.target.value);
    const onBirthdateChange = (e) => setBirthdate(e.target.value);
    const onDescriptionChange = (e) => setDescription(e.target.value);
    const onImgFileChange = (e) => setImgFile(e.target.files[0]);

    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Add pet</Modal.Title>
            </Modal.Header>
            <Form onSubmit={onHandleSubmit}>
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
                        <Form.Control value={description} onChange={onDescriptionChange} as="textarea" placeholder="Description" required />
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

export default AddPetModal;