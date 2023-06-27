import React from "react";
import Hero from "../img/pexels-cottonbro-studio-5082579.jpg";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your business with "
        imgSrc={Hero}
        visit="/service"
        btnName="Let start"
        spanText="Osl"
      />
    </>
  );
};

export default Home;
