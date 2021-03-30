import React from "react";
import { IconContext } from "react-icons";
import * as FaIcons from "react-icons/fa";

function AboutMe() {
  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <div className="aboutMe">
        <img className="leftBanner" src="https://images.freeimages.com/images/large-previews/eec/get-in-touch-1257696.jpg"></img>
        <div className="container">
          <h1 className="banner">Contacto </h1>
          <div className="row" style={{ marginTop: "50px" }}>
            <div class="col-xl-12 col-12">
              <a href="mailto:pardod312@gmail.com" target="_blank">
                <p className="title">
                  <FaIcons.FaEnvelope />Correo: pardod312@gmail.com
                </p>
              </a>
              <a href="https://www.instagram.com/jiufen_dp/" target="_blank">
                <p className="title">
                  <FaIcons.FaInstagram />Instagram: jiufen_dp
                </p>
              </a>
              <a href="https://github.com/pardo312" target="_blank">
                <p className="title">
                  <FaIcons.FaGithub />Github: pardo312
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default AboutMe;
