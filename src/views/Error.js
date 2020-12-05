import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import { Link } from "react-router-dom";

const Error = () => {
    return (
        <Container>
            <h1>Oops!</h1>
            <p>There was an error in the page</p>
            <p>Please try again later</p>
            <Link to="/"><Button size="lg">Back to home page</Button></Link>
        </Container>
    );
}

export default Error;