import React from "react";
import "./style.css";

function Tile(props) {
  return (
    <div onClick={() => props.handleClicks(props.id)}>
      <img
      className="pic"
      alt={props.name}
      src={props.image}
      />
    </div>
  );
}

export default Tile;
