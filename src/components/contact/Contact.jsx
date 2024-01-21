import React from "react";
import "./Contact.css";
import { CiMail } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import puertoImg from "../../assets/images/puerto-punta-del-este.jpg";

const Contact = () => {
  const email = "micaelalopezm@gmail.com";
  const instagramUsername = "vacaciones_punta_rental";

  return (
    <div className="contact">
      <div className="blank-space"></div>
      <div className="image-container">
        <div className="image-puerto">
          <img className="puerto-img" src={puertoImg} alt="" />
        </div>
      </div>
      <div className="contact-container">
        <div className="title">Contacto</div>
        <div className="contact-text">
          Si tenes alguna duda o queres agregar tu apartamento contactate con
          VPR!
        </div>
        <div className="contact-info">
          <div className="contact-icon">
            <CiMail />{" "}
            <a className="contact-link" href={`mailto:${email}`}>
              {email}
            </a>
          </div>
          <div className="contact-icon">
            <FaInstagram />{" "}
            <a
              href={`https://www.instagram.com/${instagramUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >{`@${instagramUsername}`}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
