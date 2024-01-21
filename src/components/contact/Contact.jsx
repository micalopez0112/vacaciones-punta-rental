import React, { useState } from "react";
import "./Contact.css";
import { CiMail } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  const email = "micaelalopezm@gmail.com";
  const instagramUsername = "vacaciones_punta_rental";

  return (
    <div className="contact-container">
      <div className="title">Contacto</div>
      <div className="contact-info">
        <CiMail /> <a href={`mailto:${email}`}>{email}</a>
      </div>
      <div className="contact-info">
        <FaInstagram />{" "}
        <a
          href={`https://www.instagram.com/${instagramUsername}`}
          target="_blank"
          rel="noopener noreferrer"
        >{`@${instagramUsername}`}</a>
      </div>
    </div>
  );
};

export default Contact;
