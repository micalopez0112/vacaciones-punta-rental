import React from "react";
import "./ThingsToDo.css";
import cosasParaHacerLogo from "../../assets/images/logo-que-hacemos-hoy.jpg";

const ThingsToDo = () => {
  return (
    <div className="things-to-do">
      <div className="restaurants">
        <div className="things-to-do-title">Restaurantes</div>
        <div className="things-to-do-description">Restaurantes descripcion</div>
        <div className="restaurants-list-container">
          <ul className="restaurants-list">
            <li className="restaurant-container">
              <a
                href="https://www.instagram.com/chilloutrestouy"
                className="restaurant"
                target="_blank"
                rel="noreferrer"
              >
                Chillout Resto
              </a>
            </li>
            <li className="restaurant-container">
              <a
                href="https://www.instagram.com/elmercadopde"
                className="restaurant"
                target="_blank"
                rel="noreferrer"
              >
                El Mercado
              </a>
            </li>
            <li className="restaurant-container">
              <a
                href="https://www.instagram.com/zazupuerto/"
                className="restaurant"
                target="_blank"
                rel="noreferrer"
              >
                Zazú Puerto
              </a>
            </li>
            <li className="restaurant-container">
              <a
                href="https://www.instagram.com/boxgarden.pde/"
                className="restaurant"
                target="_blank"
                rel="noreferrer"
              >
                Box Garden
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="more-things">
        <a
          href="https://quehacemoshoy.com.uy/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="que-hacemos-hoy" src={cosasParaHacerLogo} alt="" />
        </a>
      </div>
    </div>
  );
};

export default ThingsToDo;
