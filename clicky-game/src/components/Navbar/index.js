import React from 'react';
import "./style.css";

function Navbar(props) {
  return (
    <nav className="nav navbar-dark">
      <p>Score: {props.score} | High Score: {props.topScore} </p>
    </nav>
  );
}

export default Navbar;
