import React from "react";
import "./Services.css";
import Slider from "../slider/Slider";
import { Link } from "react-router-dom";
import puertoImg from "../../assets/images/puerto-punta-del-este.jpg";
import imgsServices from "../../servicesData";

const Services = () => {
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <div className="services">
      <div className="blank-space"></div>
      <div className="image-container">
        <div className="image-puerto">
          <img className="puerto-img" src={puertoImg} alt="" />
        </div>
      </div>
      <div className="services-container">
        <div className="title">Servicios</div>
        <div className="services-text">
          Armamos tu Airbnb para que tengas una mayor ocupación y mejor
          rentabilidad!
        </div>
        <div className="services-slider">
          <Slider images={imgsServices} />
        </div>
        <div className="services-text">
          Contactate con nosotros para que tu apartamento suba de nivel!
        </div>
        <Link
          to={{ pathname: `../contact` }}
          className="button"
          onClick={() => {
            handleLinkClick();
          }}
        >
          Contacto
        </Link>
      </div>
    </div>
  );
};

export default Services;
