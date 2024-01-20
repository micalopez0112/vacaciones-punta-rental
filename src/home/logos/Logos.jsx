import React from "react";
import airbnb from "./airbnbsuperhost.jpg";
import booking from "./booking.jpg";
import "./Logos.css";

const Logos = () => {
  return (
    <div className="logos">
      <img className="img" src={airbnb} alt="" />
      <img className="img" src={booking} alt="" />
    </div>
  );
};

export default Logos;
