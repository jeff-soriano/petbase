import Container from 'react-bootstrap/Container';

import Navigation from "../components/Navigation";
import PetSection from "../components/PetSection";

import './Main.css';

const Main = () => {
    return (
        <Container>
            <Navigation />
            <PetSection />
            <footer className="footer">
                © Jeff Soriano {new Date().getFullYear()}
            </footer>
        </Container>
    );
}

export default Main;