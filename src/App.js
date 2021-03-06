import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import Portafolio from './pages/Portafolio'
import Contacto from './pages/Contacto'
function App() {
  return (
    <div >
      <Router>
          <Navbar/>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/portafolio' component={Portafolio} />
            <Route path='/contacto' component={Contacto} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
