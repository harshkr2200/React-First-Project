import React from "react";
import Common from "./Common";
import about from "../img/React1.png";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About Page"
        imgSrc={about}
        visit="/contact"
        btnName="Contact Now"
      />
    </>
  );
};

export default About;
