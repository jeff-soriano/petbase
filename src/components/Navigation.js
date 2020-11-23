import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const Navigation = () => {
    return <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Jeff's pets</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Button className="ml-auto" variant="danger">Log out</Button>
    </Navbar>
}

export default Navigation;