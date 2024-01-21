import React from "react";
import "./Information.css";
import puertoImg from "../../assets/images/puerto-punta-del-este.jpg";
import apartment from "../../assets/images/la-salina.jpg";
import losDedos from "../../assets/images/los-dedos.jpg";
import { Link } from "react-router-dom";

const Information = () => {
  return (
    <div className="info-container">
      <div className="info">
        <div className="title">
          Descubre tu lugar para visitar Punta del Este
        </div>
        <div className="info-text">
          Descubre el encanto exclusivo de Punta del Este con nuestras opciones
          de alquiler de apartamentos. Nuestra selección de propiedades
          garantiza una experiencia única para tus vacaciones en este codiciado
          destino uruguayo.
        </div>
        <div className="info-text">
          Nos complace recomendarte los mejores lugares para cenar, comprar y
          disfrutar de la playa cerca de cada una de nuestras propiedades.
          Queremos asegurarnos que tu estadía en Punta del Este sea inolvidable
          y aproveches al máximo todo lo que esta encantadora ciudad tiene para
          ofrecer.
        </div>
        <div className="info-text">
          Ya sea que estés buscando alquilar o planificar las vacaciones
          perfectas con tu familia o amigos, nuestro equipo de VPR se compromete
          a garantizar que la propiedad que seleccionemos supere tus
          expectativas. Con un conocimiento profundo de la zona, nos enorgullece
          destacar las mejores opciones de alquiler en Punta del Este y estamos
          listos para ayudarte a planificar tu próxima estancia.
        </div>
        <div className="info-text">
          Tu experiencia comienza desde el momento en que empiezas a explorar
          nuestras exclusivas opciones de alquiler en Punta del Este!
        </div>
      </div>

      <div className="apartments-attractions-container">
        <div className="apartments-info">
          <div className="ap-info-text">Apartamentos</div>
          <Link to={{ pathname: `apartments` }}>
            <img className="info-img" src={apartment} alt="" />
          </Link>
        </div>
        <div className="attractions-info">
          <div className="at-info-text">Cosas para hacer</div>
          <div className="img-container">
            <Link to={{ pathname: `things-to-do` }}>
              <img className="info-img" src={losDedos} alt="" />
            </Link>
          </div>
        </div>
      </div>

      <div className="info">
        <div className="info-text">
          Descubrí la hermosa ciudad de Punta del Este junto a nosotros!
        </div>
      </div>

      <div className="image-container">
        <div className="image-puerto">
          <img className="puerto-img" src={puertoImg} alt="" />
        </div>
      </div>
      <div className="view-add-container">
        <div className="view-properties-container">
          <div className="view-text"> Quiero ver las propiedades!</div>
          <Link to={{ pathname: `apartments` }} className="view-button">
            Ver
          </Link>
        </div>
        <div className="add-property-container">
          <div className="add-text">Quiero agregar mi propiedad!</div>
          <Link to={{ pathname: `contact` }} className="add-button">
            Agregar{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Information;
