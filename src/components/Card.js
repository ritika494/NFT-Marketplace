import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div class="card" className={props.className}>
      <p className="heading">{props.heading}</p>
      <img src={props.src} class="card-img-top" alt="..." />
      <div class="card-body">
        <p class="card-text">{props.text}</p>
      </div>
    </div>
  );
}

export default Card;
