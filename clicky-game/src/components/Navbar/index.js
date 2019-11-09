import React from 'react';
import "./style.css";

function Navbar(props) {
  return (
    <span className="nav">
      <p>Score: {props.score} | High Score: {props.topScore} </p>
    </span>
  );
}

export default Navbar;
