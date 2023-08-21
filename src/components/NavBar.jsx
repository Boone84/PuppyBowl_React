// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/players">Players</Link>
      <Link to="/add-player">Add Player</Link>
    </nav>
  );
}

export default NavBar;
