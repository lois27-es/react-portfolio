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
          particleSpread={10}
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
    
    {/* This container handles the clipping and the border */}
    <div className="img-container">
      <img src={profile_img} alt="Geraldine Lois Agulto" className="hero-img" />
    </div>

  </div>
</div>
        {/* Right: Text (Upscaled) */}
        <div className="hero-right">
          <h3 className="hero-welcome">Hello, It's Me</h3>
          <h1>
            <span>Geraldine Lois Agulto</span>
          </h1>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: '#e0e0e0', marginTop: '-10px', marginBottom: '20px' }}>
            4th Year BSIT Student
          </h2>

          <p>
            Aspiring Front-End Developer and Web Designer with four years of academic experience,
            crafting seamless and impactful digital experiences.
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
      <div className="scroll-down">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Scroll Down</span>
      </div>

    </div>
  );
};

export default Hero;