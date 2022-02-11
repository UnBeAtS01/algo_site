import React from "react";
import "./card.css";
function Card({ text, image, title, link, codebase }) {
  return (
    <div className="card">
      <div className="imgBx">
        <a href={link}>
          <img src={image} alt="algo" />
        </a>
      </div>
      <div className="tag">{title}</div>
      <div className="about">
        <h2
          style={{
            borderBottom: ".2px solid #6bffe9",
            fontWeight: 300,
          }}
        >
          {title}
        </h2>
        <p>{text}</p>

        <button className="button">
          <a href={link}>LIVE </a>
        </button>
        <button className="button">
          <a href={codebase}>CODE </a>
        </button>
      </div>
    </div>
  );
}

export default Card;
