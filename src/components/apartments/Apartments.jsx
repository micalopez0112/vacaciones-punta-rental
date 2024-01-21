import React from "react";
import "./Apartments.css";
import { IoBedOutline } from "react-icons/io5";
import { TbBath } from "react-icons/tb";
import { MdPeopleOutline } from "react-icons/md";
import Slider from "../slider/Slider";
import apartments from "../../apartmentsData";
import buildings from "../../buildingsData";
import { FaAirbnb } from "react-icons/fa";
import puertoImg from "../../assets/images/puerto-punta-del-este.jpg";

const Apartments = () => {
  return (
    <div className="apartments">
      <div className="blank-space"></div>
      <div className="image-container">
        <div className="image-puerto">
          <img className="puerto-img" src={puertoImg} alt="" />
        </div>
      </div>
      <div className="apartments-buildings-container">
        <div className="apartments-container">
          <div className="title">Alojamientos</div>
          <div className="apartments-section-description">
            Acá podes ver nuestros apartamentos disponibles para tu estadía en
            Punta del Este! Entrá en el link de Airbnb para confirmar tu
            apartamento!
          </div>
          {apartments.map((apartment, id) => (
            <div className="card">
              <div className="slider-apartment">
                <Slider images={apartment.imgs} />
              </div>

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
                  rel="noreferrer"
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
        <div className="buildings-container">
          <div className="title">Edificio</div>
          {buildings.map((building, id) => (
            <div className="card">
              <div className="slider-apartment">
                <Slider images={building.imgs} />
              </div>

              <div className="wrap">
                <div className="ap-title">
                  <div className="apartment-title">{building.title}</div>
                </div>

                <div className="location">
                  <div className="ap-location">{building.location}</div>
                </div>
                <a
                  href={building.airbnb}
                  className="airbnb-icon-container"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="airbnb-icon">
                    <FaAirbnb />
                  </div>
                  <div className="airbnb-text" href={building.airbnb}>
                    Airbnb
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Apartments;
