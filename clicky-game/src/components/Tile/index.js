import React from "react";
import "./style.css";

function Tile(props) {
  return (
    <div id={props.id} onClick={() => props.onClick(props.tiles.id)}>
      <img
      className="pic"
      alt={props.name}
      src={props.image}
      tile={props.tiles}
      // onClick={() => props.onClick(props.tiles.id)}
      />
    </div>
  );
}

export default Tile;
