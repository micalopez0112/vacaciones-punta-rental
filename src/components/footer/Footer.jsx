import React from "react";
import "./Footer.css";
import { FaInstagram, FaAirbnb, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <ul className="social-icon">
          <li className="icon-elem">
            <a href="#" className="icon">
              <FaInstagram />
            </a>
          </li>
          <li className="icon-elem">
            <a href="#" className="icon">
              <FaAirbnb />
            </a>
          </li>
          <li className="icon-elem">
            <a href="#" className="icon">
              <FaWhatsapp />
            </a>
          </li>
        </ul>
        <ul className="menu">
          <li className="menu-elem">
            <a href="#" className="menu-icon">
              Inicio
            </a>
          </li>
          <li className="menu-elem">
            <a href="#" className="menu-icon">
              Sobre Nosotros
            </a>
          </li>
          <li className="menu-elem">
            <a href="#" className="menu-icon">
              Equipo
            </a>
          </li>
          <li className="menu-elem">
            <a href="#" className="menu-icon">
              Contacto
            </a>
          </li>
          <li className="menu-elem">
            <a href="#" className="menu-icon">
              Videos
            </a>
          </li>
        </ul>
        <p className="footer-text">@2024 | Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

export default Footer;
