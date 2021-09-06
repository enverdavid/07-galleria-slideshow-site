import React from "react";
import "../styles/Item.css";

const Item = ({ titulo, subtitulo, image }) => {
  return (
    <div className="item-container">
      <img src={image} alt={titulo} className="image-item" />
      <div className="description-item">
        <h4 className="item-titulo">{titulo}</h4>
        <h6>{subtitulo}</h6>
      </div>
    </div>
  );
};

export { Item };
