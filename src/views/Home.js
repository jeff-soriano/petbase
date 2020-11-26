import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import { Link } from "react-router-dom";

import pawprint from "./pawprint.png"
import './Home.css';

const Home = () => {
    return (
        <div className="background">
            <div className="vertical-center text-center">
                <Container>
                    <div class="main">
                        <img style={{ margin: "20px" }} src={pawprint} alt="dog" />
                        <h1 className="header">PetBase</h1>
                        <div class="hr"><hr /></div>
                        <h2 className="sub-header">A simple way to store your pet information</h2>
                        <Link to="/pets"><Button variant="light" size="lg">Get started</Button></Link>
                    </div>
                    <footer className="footer">
                        © Jeff Soriano {new Date().getFullYear()} | Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
                    </footer>
                </Container>
            </div>
        </div>
    );
}

export default Home;