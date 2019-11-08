import React from 'react';
import "./style.css";

function ImgGrid(props) {
  return (
    <div className="img-grid">
      {props.children}
    </div>
  );
}

export default ImgGrid;
