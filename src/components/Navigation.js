import React from 'react';
import {Link} from 'react-router-dom';
import Home from '../components/Home';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <Link to="/">
          <div>
            <a href="">Home</a>
          </div>
        </Link>
        <Link to="/About">
          <div>
            <a href="">About</a>
          </div>
        </Link>
        <Link to="Contact">
          <div>
            <a href="">Contact</a>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
