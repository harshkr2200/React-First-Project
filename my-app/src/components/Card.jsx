import React from "react";
import "../Style/card.scss";
import { NavLink } from "react-router-dom";
// import Hero from "../img/pexels-cottonbro-studio-5082579.jpg";
const Card = (props) => {
  return (
    <>
      <div className="main_card_box">
        <div className="card_img">
          <img src={props.imgSrc} alt="card-img" />
        </div>
        <span className="card_title">{props.cardTitle}</span>
        <span className="card_text">
          <p>{props.cardText}</p>
        </span>
        <span className="card_btn">
          <NavLink> Click me </NavLink>
        </span>
      </div>
    </>
  );
};

export default Card;
