import { useState, useEffect } from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import PetCard from "./PetCard/PetCard";
import PetModal from "./PetModal";
import Loading from "./Loading/Loading";

import { useAuth0 } from "@auth0/auth0-react";
import { Redirect } from "react-router-dom";

// SERVICES
import petService from '../services/petService';

const PetSection = (props) => {
    const [pets, setPets] = useState(null);
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

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
        if (res.data) {
            setLoading(false);
            setPets(res.data);
        } else {
            setError(true);
        }
    }

    const handleSubmit = async (pet) => {
        const token = await getAccessTokenSilently();

        petService.post(token, username, pet).then(getPets);
        handleClose();
        setLoading(true);
    };

    const handleDelete = async (pet) => {
        const token = await getAccessTokenSilently();

        petService.delete(token, username, pet).then(getPets);
        setLoading(true);
    };

    const handleEdit = async (pet) => {
        const token = await getAccessTokenSilently();

        petService.put(token, username, pet).then(getPets);
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
                                    pet={pet}
                                    onDelete={handleDelete}
                                    onEdit={handleEdit}
                                />
                            </Col>
                        })}
                    </Row>
                    <Row>
                        <Button onClick={handleShow} style={{ marginTop: "25px" }}>Add pet</Button>
                    </Row>
                    <PetModal show={show} handleClose={handleClose} handleSubmit={handleSubmit}
                        title="Add pet" />
                </>
            }
            {error && <Redirect push to="/error" />}
        </Container>
    );
}

export default PetSection;