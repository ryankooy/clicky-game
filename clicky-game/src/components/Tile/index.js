import React from "react";
import "./style.css";

function Tile(props) {
  return (
    <div>
      <img
      className="pic"
      alt={props.name}
      src={props.image}
      onClick={() => props.handleShuffle()} />
    </div>
  );
}

export default Tile;
