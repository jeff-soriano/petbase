import Container from 'react-bootstrap/Container';

import Navigation from "../components/Navigation";
import PetSection from "../components/PetSection";

import './Main.css';

const Main = () => {
    return (
        <Container className="main-container">
            <Navigation />
            <PetSection className="pet-section" />
            <footer className="main-footer">
                © Jeff Soriano {new Date().getFullYear()}
            </footer>
        </Container>
    );
}

export default Main;