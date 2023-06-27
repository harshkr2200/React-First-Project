import React from "react";
import Card from "./Card";
import Carddata from "./Carddata";

const Service = () => {
  return (
    <>
      <div className="service_main_box">
        <h1 className="service_title">Our Services</h1>
        <div className="service_inside_box">
          {Carddata.map((Value, index) => {
            return (
              <Card
                key={index}
                imgSrc={Value.imageSrc}
                cardTitle={Value.cardtitletitle}
                cardText={Value.cardtext}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Service;
