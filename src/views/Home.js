import Button from 'react-bootstrap/Button';

import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <h1>Petbase</h1>
            <h2>A simple way to store your pet information</h2>
            <Link to="/pets"><Button>Get started</Button></Link>
        </>
    );
}

export default Home;