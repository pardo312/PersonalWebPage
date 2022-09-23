import React from "react";
import { IconContext } from "react-icons";
import * as FaIcons from "react-icons/fa";
import './scss/Global.scss';
import './scss/Contact/Contact.scss';

function AboutMe() {
  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <div id="contactMe" className="contactMe">
        <div className="container">
          <h1 className="title title_looking">Contacto </h1>
          <div className="contactButtonsContainer ">
            <a className="contactButtons" href="https://www.instagram.com/jiufen_dp/" target="_blank" rel="noopener noreferrer">
              <FaIcons.FaInstagram />
            </a>
            <a className="contactButtons" href="https://github.com/pardo312" target="_blank" rel="noopener noreferrer">
              <FaIcons.FaGithub />
            </a>
            <a className="contactButtons" target="_blank" rel="noopener noreferrer">
              <FaIcons.FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default AboutMe;
