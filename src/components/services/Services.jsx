import React from "react";
import "./Services.css";
import Slider from "../slider/Slider";

const imgs = [
  {
    id: 1,
    imgUrl: "./assets/images/la-salina-114/IMG1.jpg",
  },
  {
    id: 2,
    imgUrl: "./assets/images/la-salina-114/IMG2.jpg",
  },
  {
    id: 3,
    imgUrl: "./assets/images/la-salina-114/IMG3.jpg",
  },
  {
    id: 4,
    imgUrl: "./assets/images/la-salina-114/IMG4.jpg",
  },
  {
    id: 5,
    imgUrl: "./assets/images/la-salina-114/IMG5.jpg",
  },
];

const Services = () => {
  return (
    <div className="services">
      <div className="title">Servicios</div>
      <div className="services-text">
        Armamos tu Airbnb para que tengas una mayor ocupación y mejor
        rentabilidad!
      </div>
      <div className="services-slider">
        <Slider images={imgs} />
      </div>
      <div className="services-text">
        Contactate con nosotros para que tu apartamento suba de nivel!
      </div>
    </div>
  );
};

export default Services;
