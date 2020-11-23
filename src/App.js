import Container from 'react-bootstrap/Container';

import Navigation from "./components/Navigation";
import PetSection from "./components/PetSection";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container>
      <Navigation />
      <PetSection />
    </Container>
  );
}

export default App;
