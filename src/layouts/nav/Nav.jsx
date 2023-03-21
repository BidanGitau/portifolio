import { useState } from "react";

import menu from "../../assets/burger.svg";
import close from "../../assets/close.svg";

import "./nav.css";

const Nav = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <>
      <div className="nav " style={{ boxShadow: " 0px  2px 2px #64ffda" }}>
        <div className="logo-section">
          <a className="navlink" href="/" style={{ textDecoration: "none" }}>
            <div className="logo">
              <span>B</span>_ Dev
            </div>
          </a>
        </div>

        <div id="navbar-collapse">
          <div className="menu-icon" onClick={handleShowNavbar}>
            {showNavbar ? (
              <img
                src={close}
                alt="niko apap"
                className={` burger-icon ${showNavbar && "rotar"}`}
              />
            ) : (
              <img src={menu} alt="niko apap" className="burger-icon" />
            )}

            <div className={`nav-section  ${showNavbar && "active"}`}>
              <ul className="navbar">
                <a className="navlink" href="#about">
                  About
                </a>
                <a href=""></a>
                <a className="navlink" href="#projects">
                  Projects
                </a>
                <a className="navlink" href="#contact">
                  Contact
                </a>
                <a
                  className="navlink resume"
                  href="/resume"
                  onClick={() => {
                    window.open(
                      "https://drive.google.com/file/d/1I0iFDBDZyTBT1RTyw32dVQ-WCQi3kj23/view?usp=share_link"
                    );
                  }}
                >
                  Resume
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
