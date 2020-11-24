import Container from 'react-bootstrap/Container';
import { Route, Switch } from "react-router-dom";

import Main from "./views/Main";
import ProtectedRoute from "./auth/protected-route";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container>
      <Switch>
        <ProtectedRoute path="/" exact component={Main} />
      </Switch>
    </Container>
  );
}

export default App;
