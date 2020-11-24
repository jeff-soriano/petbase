import Navbar from 'react-bootstrap/Navbar';
import LogoutButton from "./LogoutButton";

const Navigation = () => {
    return <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Jeff's pets</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* <Button className="ml-auto" variant="danger">Log out</Button> */}
        <LogoutButton classNames="ml-auto" />
    </Navbar>
}

export default Navigation;