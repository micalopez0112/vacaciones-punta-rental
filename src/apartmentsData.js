function generateImageArray(basePath, numberOfImages) {
  const images = [];

  for (let i = 1; i <= numberOfImages; i++) {
    images.push({
      id: i,
      imgUrl: `${basePath}IMG${i}.jpg`,
    });
  }

  return images;
}

const imgs114 = generateImageArray("./assets/images/la-salina-114/", 18);
const imgs014 = generateImageArray("./assets/images/la-salina-014/", 15);

const apartments = [
  {
    id: 1,
    title: "Apartamento en Punta del Este",
    description:
      "Apartamento nuevo, moderno, muy bien ubicado.    Cerquita de la zona de pubs de la Península. A dos cuadras del puerto, próximo a Gorlero y a la playa de los Ingleses. Cercano al Faro e Iglesia de la Candelaria.",
    rooms: "1",
    bathrooms: "1",
    people: "2",
    location: "Punta del Este",
    airbnb:
      "https://es.airbnb.com/rooms/46054226?check_in=2024-02-12&check_out=2024-02-19&source_impression_id=p3_1705539204_BU4WCreshY8xlBq2&previous_page_section_name=1000&federated_search_id=8c760e6c-fdb3-4a40-8195-0c13bd04dd8d",
    imgs: imgs114,
  },
  {
    id: 2,
    title: "Apartamento en Punta del Este",
    rooms: "1",
    bathrooms: "1",
    people: "4",
    location: "Punta del Este",
    imgs: imgs014,
  },
];
export default apartments;

export const getApartmentById = (id) => {
  return apartments.find((apartment) => apartment.id === parseInt(id));
};
