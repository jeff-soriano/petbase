import Container from 'react-bootstrap/Container';

import Navigation from "../components/Navigation";
import PetSection from "../components/PetSection";

import './Pets.css';

const Pets = () => {
    return (
        <Container className="pets-container">
            <Navigation />
            <PetSection className="pet-section" />
            <footer className="pets-footer">
                © Jeff Soriano {new Date().getFullYear()}
            </footer>
        </Container>
    );
}

export default Pets;