import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import { Link } from "react-router-dom";

import dogImg from "./dog.png"

const Home = () => {
    return (
        <Container className="text-center">
            <img src={dogImg} alt="dog" />
            <h1>Petbase</h1>
            <h2>A simple way to store your pet information</h2>
            <Link to="/pets"><Button size="lg">Get started</Button></Link>
        </Container>
        // Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
    );
}

export default Home;