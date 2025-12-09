import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./hero.css";
import profile_img from "../../assets/profile_img.svg";
import Particles from "../Particles/Particles";

const Hero = () => {
  const openResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <div id="home" className="hero">

      {/* 1. Global Particles */}
      <div className="hero-particles-bg">
        <Particles
          particleColors={["#ffffff", "#a29bfe"]}
          particleCount={200}
aparticleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      <div className="hero-container">

        {/* Left: Image */}
        <div className="hero-left">
          <div className="img-glow-wrapper">
            <div className="img-container">
              <img
                src={profile_img}
                alt="Geraldine Lois Agulto"
                className="hero-img"
              />
            </div>
          </div>
        </div>

        {/* Right: Text */}
        <div className="hero-right">

          {/* Move welcome text on top */}
          <h3 className="hero-welcome">HELLO, IT'S ME</h3>

          {/* Split name into two colors */}
          <h1>
            <span className="name-white">Geraldine</span>{" "}
            <span className="name-blue">Lois Agulto</span>
          </h1>

          <h2 className="hero-subtitle">
            4th Year BSIT Student
          </h2>

          <p>
            Aspiring Front-End Developer and Web Designer with four years of
            academic experience, crafting seamless and impactful digital
            experiences.
          </p>

          <div className="hero-action">
            <AnchorLink className="hero-connect" href="#contact" offset={50}>
              Connect with me
            </AnchorLink>

            <div className="hero-resume" onClick={openResume}>
              My Resume
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="">
        <div className="">
          <div className=""></div>
        </div>
        <span></span>
      </div>

    </div>
  );
};

export default Hero;
