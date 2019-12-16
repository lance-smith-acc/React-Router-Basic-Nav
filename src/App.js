import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <div>
    <Navigation />
    <Route exact path="/" component="Home">
      <Home />
    </Route>
    <Route path="/about" component="About">
      <About />
    </Route>
    <Route path="/contact" component="Contact">
      <Contact />
    </Route>
  </div>
);

export default App;
