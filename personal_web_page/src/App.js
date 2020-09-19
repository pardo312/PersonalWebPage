import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import Portafolio from './pages/Portafolio'
import AboutMe from './pages/AboutMe'
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/portafolio' component={Portafolio} />
          <Route path='/aboutMe' component={AboutMe} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
