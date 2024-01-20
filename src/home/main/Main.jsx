import React from "react";
import video from "./puntadeleste.mp4";
import "./Main.css";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="main">
      <video className="video" src={video} autoPlay loop muted></video>
      <div className="overlay"></div>
      <div className="content">
        <h1>Descubre tu próxima casa fuera de casa!</h1>
        <Link to={{ pathname: `apartments` }} className="seeApartments">
          Ver alojamientos
        </Link>
      </div>
    </div>
  );
};

export default Main;
