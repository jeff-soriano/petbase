import React from "react";
import Button from 'react-bootstrap/Button';
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = ({ classNames }) => {
    const { logout } = useAuth0();
    return (
        <Button
            variant="danger"
            className={classNames}
            onClick={() =>
                logout({
                    returnTo: window.location.origin,
                })
            }>Log out
        </Button>
    );
};

export default LogoutButton;