import { useState, useEffect } from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import PetCard from "./PetCard/PetCard";
import AddPetModal from "./AddPetModal";
import Loading from "./Loading/Loading";

import { useAuth0 } from "@auth0/auth0-react";

// SERVICES
import petService from '../services/petService';

const PetSection = (props) => {
    const [pets, setPets] = useState(null);
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);

    const { getAccessTokenSilently, user } = useAuth0();
    const { email } = user;
    const username = email;

    useEffect(() => {
        getPets();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getPets = async () => {
        const token = await getAccessTokenSilently();

        let res = await petService.getAll(token, username);
        if (res) {
            setLoading(false);
            setPets(res);
        }
    }

    const handleSubmit = async (name, birthdate, description, imgFile) => {
        const token = await getAccessTokenSilently();

        petService.post(token, username, name, birthdate, description, imgFile).then(getPets);
        handleClose();
        setLoading(true);
    };

    const handleDelete = async (id, imgKey) => {
        const token = await getAccessTokenSilently();

        petService.delete(token, username, id, imgKey).then(getPets);
        setLoading(true);
    };

    const handleEdit = async (id, name, birthdate, description, imgFile, petImgKey) => {
        const token = await getAccessTokenSilently();

        petService.put(token, username, id, name, birthdate, description, imgFile, petImgKey).then(getPets);
        setLoading(true);
    }

    return (
        <Container className={props.className}>
            {loading ? <Loading /> :
                <>
                    <Row>
                        {pets && pets.map((pet, index) => {
                            return <Col key={index} lg={4} md={6} style={{ marginTop: "25px" }}>
                                <PetCard
                                    petId={pet._id}
                                    petName={pet.name}
                                    petBirthDate={pet.birthdate}
                                    petDescription={pet.description}
                                    petImgUrl={pet.imgFile}
                                    petImgKey={pet.imgKey}
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
                </>
            }
        </Container>
    );
}

export default PetSection;