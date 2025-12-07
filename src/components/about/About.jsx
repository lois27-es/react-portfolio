import React, { useState, useEffect } from "react";
import "./about.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import meme_cat from "../../assets/cat.png"; 

const About = () => {
  const [stars, setStars] = useState([]);
  const [memes, setMemes] = useState([]);

  
  const randomPosition = () => ({
    top: `${Math.random() * 80 + 10}%`,
    left: `${Math.random() * 90 + 5}%`,
  });


  useEffect(() => {
    const addStar = () => {
      const newStar = { id: Date.now(), ...randomPosition() };
      setStars((prev) => [...prev, newStar]);
      
      setTimeout(() => {
        setStars((prev) => prev.filter((s) => s.id !== newStar.id));
      }, 15000);
    };

    addStar(); 
    const interval = setInterval(addStar, 10000); 
    return () => clearInterval(interval);
  }, []);

  // 🌈 When a star is clicked, show a meme cat at random position
  const handleStarClick = (id) => {
    const meme = { id: Date.now(), ...randomPosition() };
    setMemes((prev) => [...prev, meme]);
    setStars((prev) => prev.filter((s) => s.id !== id));

    // Remove meme after 5 seconds
    setTimeout(() => {
      setMemes((prev) => prev.filter((m) => m.id !== meme.id));
    }, 5000);
  };

  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="theme pattern" />
      </div>

      <div className="about-row">
        <div className="about-container">
          <div className="about-content">
            <p>
              Over four years as a BSIT student, I’ve grown through learning,
              projects, and teamwork. My goal is to transform this journey into
              impactful contributions in the IT field.
            </p>
            <p>
              I’m adaptable, curious, and driven to keep improving — turning
              every challenge into a learning opportunity.
            </p>
          </div>
        </div>

        <div className="about-skills">
          <h2>My Skills</h2>
          <div className="about-skill"><p>Excel</p><hr style={{ width: "50%" }} /></div>
          <div className="about-skill"><p>Canva Designer</p><hr style={{ width: "70%" }} /></div>
          <div className="about-skill"><p>Microsoft</p><hr style={{ width: "60%" }} /></div>
          <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
        </div>
      </div>

      
      {stars.map((star) => (
        <div
          key={star.id}
          className="floating-star"
          style={{
            position: "absolute",
            top: star.top,
            left: star.left,
            fontSize: "28px",
            cursor: "pointer",
            animation: "floatStar 4s ease-in-out infinite",
          }}
          onClick={() => handleStarClick(star.id)}
        >
          ✨
        </div>
      ))}

   
      {memes.map((meme) => (
        <img
          key={meme.id}
          src={meme_cat}
          alt="Meme Cat"
          className="meme-cat"
          style={{
            position: "absolute",
            top: meme.top,
            left: meme.left,
            width: "120px",
            height: "120px",
            animation: "popIn 0.5s ease-out",
          }}
        />
      ))}
    </div>
  );
};

export default About;
