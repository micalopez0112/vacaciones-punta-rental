import React from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

import { getApartmentById } from "../../apartmentsData";

const ApartmentDetail = () => {
  const { id } = useParams();
  const apartment = getApartmentById(id);

  if (!apartment) {
    // Manejar caso donde no hay información del apartamento
    return <div>No se encontró información del apartamento.</div>;
  }

  return (
    <div>
      <h2>{apartment.title}</h2>
      <p>Rooms: {apartment.rooms}</p>
      <p>Bathrooms: {apartment.bathrooms}</p>
      <p>People: {apartment.people}</p>
      <p>Location: {apartment.location}</p>

      <h3>Images:</h3>
      <div>
        {apartment.imgs.map((img, index) => (
          <img key={index} src={img} alt={`Image ${index + 1}`} />
        ))}
      </div>
      <a href={apartment.airbnb}>Airbnb</a>
    </div>
  );
};

export default ApartmentDetail;
