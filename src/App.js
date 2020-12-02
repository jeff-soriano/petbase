import { Route, Switch } from "react-router-dom";

import Pets from "./views/Pets";
import Home from "./views/Home";
import ProtectedRoute from "./auth/protected-route";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <ProtectedRoute path="/pets" exact component={Pets} />
    </Switch>
  );
}

export default App;
