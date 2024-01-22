import React, { useEffect, useRef, useState } from "react";
import "./Slider.css";

function Slider({ images }) {
  console.log(images);
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const listNode = listRef.current;
    const scrollWidth = listNode.scrollWidth / images.length;
    listNode.scrollTo({ left: currentIndex * scrollWidth, behavior: "smooth" });
  }, [currentIndex, images.length]);

  const changeImage = (direction) => {
    setCurrentIndex((prevIndex) => {
      if (direction === "prev") {
        return prevIndex > 0 ? prevIndex - 1 : images.length - 1;
      } else {
        return prevIndex < images.length - 1 ? prevIndex + 1 : 0;
      }
    });
  };

  return (
    <div className={"slider-container"}>
      <div
        className="left arrow"
        onClick={(e) => {
          e.stopPropagation();
          changeImage("prev");
        }}
      >
        <div className="arrow-icon">{"<"}</div>
      </div>
      <div
        className="right arrow"
        onClick={(e) => {
          e.stopPropagation();
          changeImage("next");
        }}
      >
        {">"}
      </div>
      <div className="container-images" ref={listRef}>
        <ul className="slider-list">
          {images.map((item, index) => (
            <li className="slider-list-element" key={index}>
              <img
                src={item.imgUrl}
                width={500}
                height={400}
                alt=""
                className="slider-img"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Slider;
