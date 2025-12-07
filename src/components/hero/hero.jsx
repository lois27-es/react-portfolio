import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./hero.css";
import profile_img from "../../assets/profile_img.svg";
import Particles from "../Particles/Particles";

const Hero = () => {
  return (
    <div id="home" className="hero">

      <div className="hero-particles-bg">
        <Particles
          particleColors={["#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={true}
        />
      </div>

      <div className="hero-left">
        <img src={profile_img} alt="profile" className="hero-img" />
      </div>

      <div className="hero-right">
        <h1>
          <span>I’m Geraldine Lois Agulto,</span> <br />
          4th year BSIT student at LCUP.
        </h1>

        <p>
          Aspiring Front-End Developer and Web Designer with four years of BSIT experience,
          eager to create impactful digital experiences.
        </p>

        <div className="hero-action">
          <AnchorLink className="hero-connect" href="#contact" offset={50}>
            Connect with me
          </AnchorLink>
          <div className="hero-resume">My Resume</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
