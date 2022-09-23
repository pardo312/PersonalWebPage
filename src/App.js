import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Portafolio from './pages/Portafolio'
import Contacto from './pages/Contacto'
function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Home />
        <AboutMe />
        <Portafolio />
        <Contacto />
      </Router>
    </div>
  );
}

export default App;
