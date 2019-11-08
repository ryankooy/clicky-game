import React from "react";
import "./style.css";

function Tile(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <span onClick={() => props.handleShuffle()} className="shuffle">
      </span>
    </div>
  );
}

export default Tile;
