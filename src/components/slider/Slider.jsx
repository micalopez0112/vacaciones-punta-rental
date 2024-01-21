import React, { useEffect, useRef, useState } from "react";
import "./Slider.css";

function Slider({ images }) {
  console.log(images);
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

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

  const toggleFullScreen = () => {
    if (!isFullScreen) {
      setIsFullScreen(!isFullScreen);
    }
  };

  const handleCloseButtonClick = (e) => {
    e.stopPropagation(); // Stop the click event from propagating to the slider container
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div
      className={`slider-container${isFullScreen ? " full-screen" : ""}`}
      onClick={toggleFullScreen}
    >
      {isFullScreen && (
        <div className="close-button" onClick={handleCloseButtonClick}>
          Close
        </div>
      )}
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
      <div
        className={`container-images${isFullScreen ? " full-screen" : ""}`}
        ref={listRef}
      >
        <ul className="slider-list">
          {images.map((item, index) => (
            <li className="slider-list-element" key={index}>
              <img
                src={item.imgUrl}
                width={500}
                height={280}
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
