import logo from './logo.svg';
import './App.css';
import Contacts from './containers/contact.js'
import Portfolio from './containers/portfolio.js'
import { BrowserRouter, Route, Link } from "react-router-dom";
import Index from './containers/index.js'

function App() {
  return (
    <div>
      <BrowserRouter><Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/home">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/portfolio">Portfolio</Link>
        </Nav>
      </Navbar>
        <Route path="/home"><Index /></Route>
        <Route path="/contact"><Contacts /></Route>
        <Route path="/portfolio"><Portfolio /></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
