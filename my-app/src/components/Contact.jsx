import React from "react";
import "../Style/contact.scss";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="contact_page">
        <h4>Contact Us page </h4>
        <div className="contact_box">
          <h5>Name</h5>
          <input type="text" placeholder="Enter your Name" />
          <h5>Password</h5>
          <input type="text" placeholder="Enter your Password" />
          <h5>Conform Password</h5>
          <input type="text" placeholder="Enter your Conform Password" />
          <h5>Mobile Number</h5>
          <input type="text" placeholder="Enter your Mobile Number" />
          <h5> Email </h5>
          <input type="text" placeholder="Enter your Email" />
          <span className="btn_span">
          <NavLink className="contact_btn">Submit</NavLink>
          </span>
        </div>
      </div>
    </>
  );
};

export default Contact;
