import React from "react";
import { NavLink } from "react-router-dom";
import "../Style/Common.scss";
const Common = (props) => {
  return (
    <>
      <section className="home_box">
        <div className="home_inside_box">
          <div className="home_left">
            <h1>
              {props.name} <span className="brand_name">{props.spanText} </span>
            </h1>
            <h2>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
              labore?
            </h2>
            <span className="home_btn">
              <NavLink to={props.visit}>{props.btnName}</NavLink>
            </span>
          </div>
          <div className="home_right">
            <div className="home_img animation">
              <img src={props.imgSrc} alt="this is our main image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
