import React, { useState } from "react";
import "./Apartments.css";
import { IoBedOutline } from "react-icons/io5";
import { TbBath } from "react-icons/tb";
import { MdPeopleOutline } from "react-icons/md";
import Slider from "../slider/Slider";
import { Link } from "react-router-dom";
import apartments from "../../apartmentsData"; // Ajusta la ruta según tu estructura de carpetas
import { FaAirbnb } from "react-icons/fa";

const Apartments = () => {
  const [actualImg, setActualImg] = useState(0);

  return (
    <div className="apartments">
      <div className="title">Apartamentos</div>
      <div className="apartments-section-description">
        Acá podes ver nuestros apartamentos disponibles para tu estadía en Punta
        del Este! Entrá en el link de Airbnb para confirmar tu apartamento!
      </div>
      {apartments.map((apartment, id) => (
        <div className="card">
          <Slider images={apartment.imgs} />

          <div className="wrap">
            <div className="ap-title">
              <div className="apartment-title">{apartment.title}</div>
            </div>
            <div className="ap-info">
              <div className="icon-container">
                <IoBedOutline />
                <p className="rooms">{apartment.rooms}</p>
              </div>
              <div className="bar">|</div>
              <div className="icon-container">
                <TbBath />
                <p className="bathrooms">{apartment.bathrooms}</p>
              </div>
              <div className="bar">|</div>
              <div className="icon-container">
                <MdPeopleOutline />
                <p className="people">{apartment.people}</p>
              </div>
            </div>
            <div className="location">
              <div className="ap-location">{apartment.location}</div>
            </div>
            <a
              href={apartment.airbnb}
              className="airbnb-icon-container"
              target="_blank"
            >
              <div className="airbnb-icon">
                <FaAirbnb />
              </div>
              <div className="airbnb-text" href={apartment.airbnb}>
                Airbnb
              </div>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Apartments;
