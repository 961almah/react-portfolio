import logo from './logo.svg';
import './App.css';
import Contacts from './containers/contact.js'
import Portfolio from './containers/portfolio.js'
import { BrowserRouter, Route, Link } from "react-router-dom";
import Index from './containers/index.js'

function App() {
  return (
    <div>
      <BrowserRouter>
        <div bg="dark" variant="dark">
          <div className="mr-auto">
            <a href="#main">Home</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </BrowserRouter>
      <Index />
      <Portfolio />
      <Contacts />

    </div>
  );
}

export default App;
