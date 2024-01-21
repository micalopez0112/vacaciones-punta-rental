import React, { useState } from "react";
import "./Header.css";
import logo from "../../images/logo-horizontal.png";
import { Link } from "react-router-dom";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const handleButtonClick = () => {
    setShowMenu(!showMenu);
  };

  const handleLinkClick = () => {
    setShowMenu(false);
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div>
      <nav className="nav">
        <div className="container">
          <div className="logo">
            <Link to={{ pathname: `/` }} className="logo-link">
              <img src={logo} alt="" className="logo-img" />
            </Link>
          </div>

          <div className="list-container " id="mainListDiv">
            <ul className={`list ${showMenu ? "show_list" : ""}`}>
              <li className="element">
                <Link
                  to={{ pathname: `apartments` }}
                  className="nav-link"
                  onClick={() => {
                    handleLinkClick();
                  }}
                >
                  Alojamientos
                </Link>
              </li>
              <li className="element">
                <Link
                  to={{ pathname: `services` }}
                  className="nav-link"
                  onClick={() => {
                    handleLinkClick();
                  }}
                >
                  Servicios
                </Link>
              </li>
              <li className="element">
                <Link
                  to={{ pathname: `things-to-do` }}
                  className="nav-link"
                  onClick={() => {
                    handleLinkClick();
                  }}
                >
                  Atracciones
                </Link>
              </li>
              <li className="element">
                <Link
                  to={{ pathname: `contact` }}
                  className="nav-link"
                  onClick={() => {
                    handleLinkClick();
                  }}
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div className="media-button">
            <button
              className={`main-media-button ${showMenu ? "active" : ""}`}
              id="mediaButton"
              onClick={handleButtonClick}
            >
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
