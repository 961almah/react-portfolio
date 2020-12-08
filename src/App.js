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
            <a href="#contact">Contact</a>
            <a href="#portfolio">Portfolio</a>
          </div>
        </div>
      </BrowserRouter>
      <Index />
      <Contacts />
      <Portfolio />

    </div>
  );
}

export default App;
