import { useState, useEffect } from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import PetCard from "./PetCard/PetCard";
import AddPetModal from "./AddPetModal";

// SERVICES
import petService from '../services/petService';

const PetSection = () => {
    const username = "soriano.jeffm@gmail.com";
    const [pets, setPets] = useState(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        getPets();
    }, [])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getPets = async () => {
        let res = await petService.getAll(username);
        setPets(res);
    }

    const handleSubmit = (name, birthdate, description) => {
        petService.post(username, name, birthdate, description).then(getPets);
        handleClose();
    };

    const handleDelete = (id) => {
        petService.delete(username, id).then(getPets);
    };

    const handleEdit = (id, name, birthdate, description) => {
        petService.put(username, id, name, birthdate, description).then(getPets);
    }

    return (
        <Container>
            <Row>
                {pets && pets.map((pet, index) => {
                    return <Col key={index} lg={4} md={6} style={{ marginTop: "25px" }}>
                        <PetCard
                            petId={pet._id}
                            petName={pet.name}
                            petBirthDate={pet.birthdate}
                            petDescription={pet.description}
                            onDelete={handleDelete}
                            onEdit={handleEdit}
                        />
                    </Col>
                })}
            </Row>
            <Row>
                <Button onClick={handleShow} style={{ marginTop: "25px" }}>Add pet</Button>
            </Row>
            <AddPetModal show={show} handleClose={handleClose} handleSubmit={handleSubmit} />
        </Container>
    );
}

export default PetSection;