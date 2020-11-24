import Container from 'react-bootstrap/Container';
import { Route, Switch } from "react-router-dom";

import Main from "./views/Main";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container>
      <Switch>
        <Route path="/" exact component={Main} />
      </Switch>
    </Container>
  );
}

export default App;
