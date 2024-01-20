import React, { useState } from "react";
import "./Contact.css";
import { CiMail } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const email = "micaelalopezm@gmail.com";
  const instagramUsername = "vacaciones_punta_rental";

  const handleSendEmail = () => {
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

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
      <div className="contact-form">
        <label>Asunto:</label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <label>Mensaje:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleSendEmail}>Enviar correo</button>
      </div>
    </div>
  );
};

export default Contact;
