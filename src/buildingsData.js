const buildings = [
  {
    id: 1,
    title: "Edificio en Punta del Este",
    description:
      "Edificio nuevo, moderno, muy bien ubicado.    Cerquita de la zona de pubs de la Península. A dos cuadras del puerto, próximo a Gorlero y a la playa de los Ingleses. Cercano al Faro e Iglesia de la Candelaria.",
    location: "Punta del Este",
    airbnb:
      "https://es.airbnb.com/rooms/46054226?check_in=2024-02-12&check_out=2024-02-19&source_impression_id=p3_1705539204_BU4WCreshY8xlBq2&previous_page_section_name=1000&federated_search_id=8c760e6c-fdb3-4a40-8195-0c13bd04dd8d",
    imgs: [
      {
        id: 1,
        imgUrl: "./assets/images/la-salina-114/IMG1.jpg",
      },
      {
        id: 2,
        imgUrl: "./assets/images/la-salina-114/IMG2.jpg",
      },
      {
        id: 3,
        imgUrl: "./assets/images/la-salina-114/IMG3.jpg",
      },
      {
        id: 4,
        imgUrl: "./assets/images/la-salina-114/IMG4.jpg",
      },
      {
        id: 5,
        imgUrl: "./assets/images/la-salina-114/IMG5.jpg",
      },
    ],
  },
];
export default buildings;

export const getBuildingById = (id) => {
  return buildings.find((building) => building.id === parseInt(id));
};
