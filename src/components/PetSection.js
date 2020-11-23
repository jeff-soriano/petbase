import { useState, useEffect } from "react";
import moment from "moment";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import PetCard from "./PetCard";
import AddPetModal from "./AddPetModal";

// SERVICES
import petService from '../services/petService';

const PetSection = () => {
    const [pets, setPets] = useState(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        getPets();
    }, [])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getPets = async () => {
        let res = await petService.getAll();
        setPets(res);
    }

    const handleSubmit = (name, birthdate, description) => {
        petService.post(name, birthdate, description).then(getPets);
        handleClose();
    };

    return (
        <Container>
            <Row>
                {pets && pets.map((pet, index) => {
                    return <Col key={index} lg={4} md={6} style={{ marginTop: "25px" }}>
                        <PetCard
                            petName={pet.name}
                            petBirthDate={moment(pet.birthdate).format("MM/DD/YYYY")}
                            petDescription={pet.description}
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