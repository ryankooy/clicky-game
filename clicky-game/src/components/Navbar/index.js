import React from 'react';
import "./style.css";
import "../../App.js";

function Navbar(props) {
  return (
    <nav className="nav navbar-dark">
      {props.children}
    </nav>
  );
}

export default Navbar;
