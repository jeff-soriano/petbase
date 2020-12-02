import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

import { auth0Audience, auth0ClientId, auth0Domain } from "../config/env.dev";

const Auth0ProviderWithHistory = ({ children }) => {
    const history = useHistory();
    const domain = auth0Domain;
    const clientId = auth0ClientId;
    const audience = auth0Audience;

    const onRedirectCallback = (appState) => {
        history.push(appState?.returnTo || window.location.pathname);
    };

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
            audience={audience}
        >
            {children}
        </Auth0Provider>
    );
};

export default Auth0ProviderWithHistory;