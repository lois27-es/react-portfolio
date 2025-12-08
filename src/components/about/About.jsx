import React, { useState, useEffect } from "react";
import "./about.css";
// Adjust this path based on where you decided to keep supabaseClient
import { supabase } from "../supabaseClient"; 
import meme_cat from "../../assets/cat.png";
import Particles from "../Particles/Particles";

const About = () => {
  const [stars, setStars] = useState([]);
  const [memes, setMemes] = useState([]);
  
  // State for Database Data
  const [skills, setSkills] = useState([]);
  const [bio, setBio] = useState({ bio_paragraph_1: "Loading...", bio_paragraph_2: "" });

  useEffect(() => {
    // 1. Fetch Skills
    const fetchSkills = async () => {
      const { data } = await supabase.from('skills').select('*').order('id');
      if (data) setSkills(data);
    };

    // 2. Fetch Bio
    const fetchBio = async () => {
      const { data } = await supabase.from('profile').select('*').single();
      if (data) setBio(data);
    };

    fetchSkills();
    fetchBio();

    // Particle/Star Logic
    const addStar = () => {
      const newStar = { id: Date.now(), top: `${Math.random() * 80 + 10}%`, left: `${Math.random() * 90 + 5}%` };
      setStars((prev) => [...prev, newStar]);
      setTimeout(() => setStars((prev) => prev.filter((s) => s.id !== newStar.id)), 10000);
    };
    const interval = setInterval(addStar, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleStarClick = (id) => {
    // ... existing logic ...
  };

  return (
    <div id="about" className="about">
      {/* Particles code ... */}
      <div className="about-particles">
         <Particles particleColors={['#ffffff', '#00c6ff']} particleCount={100} particleSpread={10} speed={0.2} particleBaseSize={80} sizeRandomness={1} alphaParticles={true} disableRotation={false} />
      </div>

      <div className="about-container-wrapper">
        <div className="about-title">
          <h1>About Me</h1>
          <div className="title-underline"></div>
        </div>

        <div className="about-row">
          
          {/* --- LEFT: Bio Card (NOW DYNAMIC) --- */}
          <div className="about-card bio-card">
            <div className="card-content">
              {/* Paragraph 1 */}
              <p>{bio.bio_paragraph_1}</p>
              <br/>
              {/* Paragraph 2 */}
              <p>{bio.bio_paragraph_2}</p>
            </div>
          </div>

          {/* --- RIGHT: Skills Card (DYNAMIC) --- */}
          <div className="about-card skills-card">
            <h2>My Skills</h2>
            {skills.map((skill) => (
              <div className="skill-item" key={skill.id}>
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.percentage}%</span>
                </div>
                <div className="skill-bar-track">
                  <div className="skill-bar-fill" style={{ width: `${skill.percentage}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
      
      {/* Interactive Elements (Stars/Memes) ... */}
    </div>
  );
};

export default About;