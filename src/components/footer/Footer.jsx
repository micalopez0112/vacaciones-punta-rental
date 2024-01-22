import React from "react";
import "./Footer.css";
import { FaInstagram, FaAirbnb } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <div>
      <footer className="footer">
        <ul className="social-icon">
          <li className="icon-elem">
            <a
              href="https://www.instagram.com/vacaciones_punta_rental"
              className="icon"
            >
              <FaInstagram />
            </a>
          </li>
          <li className="icon-elem">
            <a
              href="https://es.airbnb.com/rooms/46054226?check_in=2024-02-12&check_out=2024-02-19&source_impression_id=p3_1705539204_BU4WCreshY8xlBq2&previous_page_section_name=1000&federated_search_id=8c760e6c-fdb3-4a40-8195-0c13bd04dd8d"
              className="icon"
            >
              <FaAirbnb />
            </a>
          </li>
        </ul>
        <ul className="menu">
          <li className="menu-elem">
            <a href="/" className="menu-icon">
              Inicio
            </a>
          </li>
          <li className="menu-elem">
            <Link
              to={{ pathname: `apartments` }}
              className="menu-icon"
              onClick={() => {
                handleLinkClick();
              }}
            >
              Alojamientos
            </Link>
          </li>
          <li className="menu-elem">
            <Link
              to={{ pathname: `services` }}
              className="menu-icon"
              onClick={() => {
                handleLinkClick();
              }}
            >
              Servicios
            </Link>
          </li>
          <li className="menu-elem">
            <Link
              to={{ pathname: `things-to-do` }}
              className="menu-icon"
              onClick={() => {
                handleLinkClick();
              }}
            >
              Atracciones
            </Link>
          </li>
          <li className="menu-elem">
            <Link
              to={{ pathname: `contact` }}
              className="menu-icon"
              onClick={() => {
                handleLinkClick();
              }}
            >
              Contacto
            </Link>
          </li>
        </ul>
        <p className="footer-text">@2024 | Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

export default Footer;
