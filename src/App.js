import { Route, Switch } from "react-router-dom";

import Main from "./views/Main";
import Home from "./views/Home";
import ProtectedRoute from "./auth/protected-route";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <ProtectedRoute path="/pets" exact component={Main} />
    </Switch>
  );
}

export default App;
