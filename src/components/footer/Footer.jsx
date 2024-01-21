import React from "react";
import "./Footer.css";
import { FaInstagram, FaAirbnb, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
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
          <li className="icon-elem">
            <a href="/" className="icon">
              <FaWhatsapp />
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
            <a href="/apartmens" className="menu-icon">
              Alojamientos
            </a>
          </li>
          <li className="menu-elem">
            <a href="/services" className="menu-icon">
              Services
            </a>
          </li>
          <li className="menu-elem">
            <a href="/contact" className="menu-icon">
              Contacto
            </a>
          </li>
        </ul>
        <p className="footer-text">@2024 | Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

export default Footer;
