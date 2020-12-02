import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import { Link } from "react-router-dom";

import pawprint from "./images/pawprint.png"
import './Home.css';

const Home = () => {
    return (
        <div className="background">
            <Container className="vertical-center">
                <div className="main">
                    <img style={{ margin: "20px" }} src={pawprint} alt="dog" />
                    <h1 className="header">PetBase</h1>
                    <div className="hr"><hr /></div>
                    <h2 className="sub-header">A simple way to store your pet information</h2>
                    <Link to="/pets"><Button variant="light" size="lg">Get started</Button></Link>
                </div>
                <footer className="home-footer">
                    © Jeff Soriano {new Date().getFullYear()} | Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
                </footer>
            </Container>
        </div>
    );
}

export default Home;