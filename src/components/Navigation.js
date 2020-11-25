import Navbar from 'react-bootstrap/Navbar';
import LogoutButton from "./LogoutButton";

import { useAuth0 } from "@auth0/auth0-react";

const Navigation = () => {
    const { user } = useAuth0();
    const { name } = user;

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">{name}'s pets</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            {/* <Button className="ml-auto" variant="danger">Log out</Button> */}
            <LogoutButton classNames="ml-auto" />
        </Navbar>
    );
}

export default Navigation;