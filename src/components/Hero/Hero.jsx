import React from "react";
import "./Hero.css";
import reactLogo from "../../../public/assets/react.svg";
import image from "../../../public/assets/Dhinesh.jpg";
import cssImg from "../../../public/assets/css.png";
import htmlLogo from "../../../public/assets/hmtl.png"
import javascriptLogo from "../../../public/assets/javascript.png";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Building Digital Experiences that Inspire</h2>
        <p>
          Passionate Front End Developer | Transforming Ideas into Seamless and
          Visually Stunning Web solutions
        </p>
      </div>
      <div className="hero-img">
        <div className="image-icons">
          <div className="tech-icon">
            <img className="reactLogo" src={reactLogo} alt="React logo" />
          </div>
          <img src={image} alt="Developer portrait" />
        </div>
        <div className="tech-icons-row">
          <div className="tech-icon">
            <img src={cssImg} alt="CSS logo" />
          </div>
          <div className="tech-icon">
            <img src={htmlLogo} alt="HTML logo" />
          </div>
          <div className="tech-icon">
            <img src={javascriptLogo} alt="JS logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
