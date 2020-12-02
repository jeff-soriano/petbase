const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

/* AUTH0 */
const auth0Audience = process.env.REACT_APP_AUTH0_AUDIENCE;
const auth0ClientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const auth0Domain = process.env.REACT_APP_AUTH0_DOMAIN;


if (!apiBaseUrl) {
    throw new Error(
        ".env is missing the definition of a REACT_APP_API_BASE_URL environmental variable",
    );
}

if (!auth0Audience) {
    throw new Error(
        ".env is missing the definition of an REACT_APP_AUTH0_AUDIENCE environmental variable",
    );
}

if (!auth0ClientId) {
    throw new Error(
        ".env is missing the definition of an REACT_APP_AUTH0_CLIENT_ID environmental variable",
    );
}

if (!auth0Domain) {
    throw new Error(
        ".env is missing the definition of an REACT_APP_AUTH0_DOMAIN environmental variable",
    );
}

module.exports = {
    apiBaseUrl,
    auth0Audience,
    auth0ClientId,
    auth0Domain
};
