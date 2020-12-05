import { useState } from "react";
import moment from "moment";

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const PetModal = ({ show, handleClose, handleSubmit, title, pet }) => {
    const defaultDate = moment(new Date(2010, 0, 1)).format("YYYY-MM-DD");
    const defaultPet = {
        name: "", birthdate: defaultDate, gender: "", species: "",
        weight: 0, description: "", imgFile: "", imgKey: ""
    };

    // Set default pet
    const [currentPet, setCurrentPet] = useState(defaultPet);
    const [disableButton, setDisableButton] = useState(false);

    const onShow = () => {
        if (pet) {
            setCurrentPet({
                ...pet
            })
        } else {
            setCurrentPet(defaultPet);
        }

        setDisableButton(false);
    }

    const onHandleSubmit = (e) => {
        handleSubmit(currentPet);
        setCurrentPet(defaultPet);
        e.preventDefault();
        setDisableButton(false);
        handleClose();
    }

    const onHandleClose = () => {
        setDisableButton(false);
        handleClose();
    }

    const onNameChange = (e) => setCurrentPet(prevPet => ({ ...prevPet, name: e.target.value }));
    const onBirthdateChange = (e) => setCurrentPet(prevPet => ({ ...prevPet, birthdate: e.target.value }));
    const onGenderChange = (e) => setCurrentPet(prevPet => ({ ...prevPet, gender: e.target.value }));
    const onSpeciesChange = (e) => setCurrentPet(prevPet => ({ ...prevPet, species: e.target.value }));
    const onWeightChange = (e) => setCurrentPet(prevPet => ({ ...prevPet, weight: e.target.value }));
    const onDescriptionChange = (e) => setCurrentPet(prevPet => ({ ...prevPet, description: e.target.value }));
    const onImgFileChange = (e) => {
        if (e.target.files[0]) {
            const file = e.target.files[0];
            switch (file.type) {
                case "image/png":
                case "image/jpg":
                case "image/jpeg":
                    setDisableButton(false);
                    break;
                default:
                    setDisableButton(true);
                    alert("Invalid file type. Please choose png, jpg, or jpeg file.");
                    break;
            }
            setCurrentPet(prevPet => ({ ...prevPet, imgFile: file }))
        }
    };

    return (
        <Modal show={show} onShow={onShow} onHide={onHandleClose} animation={false}>
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
                        <Form.Control value={moment(currentPet.birthdate).utc().format("YYYY-MM-DD")} onChange={onBirthdateChange} type="date" placeholder="Date" required />
                    </Form.Group>
                    <Form.Group controlId="gender">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control value={currentPet.gender} onChange={onGenderChange} as="select" placeholder="Gender">
                            <option>--Select--</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                            <option>Unknown</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="gender">
                        <Form.Label>Species</Form.Label>
                        <Form.Control value={currentPet.species} onChange={onSpeciesChange} as="select" placeholder="Species">
                            <option>--Select--</option>
                            <option>Bird</option>
                            <option>Cat</option>
                            <option>Dog</option>
                            <option>Horse</option>
                            <option>Rabbit</option>
                            <option>Other</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="weight">
                        <Form.Label>Weight (lbs)</Form.Label>
                        <Form.Control value={currentPet.weight} onChange={onWeightChange} type="number" min="0" max="300" step="0.01" placeholder="Weight" />
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control value={currentPet.description} onChange={onDescriptionChange} as="textarea" placeholder="Description" />
                    </Form.Group>
                    <Form.Group controlId="image">
                        <Form.Label>Upload image</Form.Label>
                        <Form.File accept=".png,.jpg,.jpeg" onChange={onImgFileChange} />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" type="button" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit" disabled={disableButton}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}

export default PetModal;