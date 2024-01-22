import React from "react";
import "./ThingsToDo.css";
import cosasParaHacerLogo from "../../assets/images/logo-que-hacemos-hoy.jpg";
import puertoImg from "../../assets/images/puerto-punta-del-este.jpg";

const ThingsToDo = () => {
  return (
    <div className="things-to-do">
      <div className="blank-space"></div>
      <div className="activities">
        <div className="image-puerto">
          <img className="puerto-img" src={puertoImg} alt="" />
        </div>

        <div className="things-to-do-container">
          <div className="restaurants">
            <div className="things-to-do-title">Restaurantes</div>
            <div className="things-to-do-description">
              Explorá la gastronomía local!
            </div>
            <div className="to-do-list-container">
              <ul className="to-do-list">
                <li className="to-do-container">
                  <a
                    href="https://www.instagram.com/chilloutrestouy"
                    className="to-do-list"
                    target="_blank"
                    rel="noreferrer"
                  >
                    • Chillout Resto
                  </a>
                </li>
                <li className="to-do-list-container">
                  <a
                    href="https://www.instagram.com/elmercadopde"
                    className="to-do-list"
                    target="_blank"
                    rel="noreferrer"
                  >
                    • El Mercado
                  </a>
                </li>
                <li className="to-do-list-container">
                  <a
                    href="https://www.instagram.com/zazupuerto/"
                    className="to-do-list"
                    target="_blank"
                    rel="noreferrer"
                  >
                    • Zazú Puerto
                  </a>
                </li>
                <li className="to-do-list-container">
                  <a
                    href="https://www.instagram.com/boxgarden.pde/"
                    className="to-do-list"
                    target="_blank"
                    rel="noreferrer"
                  >
                    • Box Garden
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="places-to-visit">
            <div className="things-to-do-title">Lugares para visitar</div>
            <div className="things-to-do-description">
              Recorré como un local!
            </div>
            <div className="to-do-list-container">
              <ul className="to-do-list">
                <li className="to-do-list-container">
                  <a
                    href="https://macamuseo.org/"
                    className="to-do-list"
                    target="_blank"
                    rel="noreferrer"
                  >
                    • Museo de Arte Contemporáneo Atchugarry (MACA)
                  </a>
                </li>
                <li className="to-do-list-container">
                  <p className="to-do-list">• La Barra</p>
                </li>
                <li className="to-do-list-container">
                  <p className="to-do-list">• El Puerto</p>
                </li>
                <li className="to-do-list-container">
                  <p className="to-do-list">• Laguna Garzón</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="more-things">
          <div className="things-to-do-title">Más cosas para hacer</div>
          <div className="things-to-do-description">
            Si todavia no encontraste que hacer, vistá
          </div>
          <a
            href="https://quehacemoshoy.com.uy/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="que-hacemos-hoy" src={cosasParaHacerLogo} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThingsToDo;
