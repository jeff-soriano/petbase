import Container from 'react-bootstrap/Container';

import Navigation from "../components/Navigation";
import PetSection from "../components/PetSection";

const Main = () => {
    return (
        <Container>
            <Navigation />
            <PetSection />
        </Container>
    );
}

export default Main;