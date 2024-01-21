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

const imgsServices = generateImageArray("./assets/images/servicios/", 6);

export default imgsServices;
