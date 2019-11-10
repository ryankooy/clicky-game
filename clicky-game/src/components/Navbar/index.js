import React from 'react';
import "./style.css";
import "../../App.js";

function Navbar(props) {
  return (
    <div className="nav">
      {props.children}
    </div>
  );
}

export default Navbar;
