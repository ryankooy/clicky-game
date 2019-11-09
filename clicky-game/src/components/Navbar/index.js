import React from 'react';
import "./style.css";

function Navbar(props) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <span className="navbar-text">
        <p>Score: {props.score} | High Score: {props.topScore} </p>
      </span>
    </nav>
  );
}

export default Navbar;
