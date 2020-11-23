import { useState } from "react";
import moment from "moment";

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AddPetButton = ({ show, handleClose, handleSubmit }) => {
    const defaultDate = moment(new Date()).format("YYYY-MM-DD");

    const [name, setName] = useState("");
    const [birthdate, setBirthdate] = useState(defaultDate);
    const [description, setDescription] = useState("");

    const onHandleSubmit = () => {
        handleSubmit(name, birthdate, description);
        setName("");
        setBirthdate(defaultDate);
        setDescription("");
    }

    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Add pet</Modal.Title>
            </Modal.Header>
            <Form onSubmit={onHandleSubmit}>
                <Modal.Body>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" required />
                    </Form.Group>
                    <Form.Group controlId="birthdate">
                        <Form.Label>Birthdate</Form.Label>
                        <Form.Control value={birthdate} onChange={(e) => setBirthdate(e.target.value)} type="date" placeholder="Date" required />
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control value={description} onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Description" required />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
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

export default AddPetButton;