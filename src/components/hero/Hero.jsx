import React, { useEffect, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Hero.css';
import profile_img from '../../assets/profile_img.svg';

const Hero = () => {
  const [countries, setCountries] = useState([]);
  const [currentCountry, setCurrentCountry] = useState(null);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('');

  const fetchCountries = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      setCountries(data);
      getNewQuestion(data);
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  };

  const getNewQuestion = (data = countries) => {
    if (!data.length) return;
    const random = data[Math.floor(Math.random() * data.length)];
    const allOptions = [random];

    while (allOptions.length < 4) {
      const option = data[Math.floor(Math.random() * data.length)];
      if (!allOptions.includes(option)) allOptions.push(option);
    }

    const shuffled = allOptions.sort(() => 0.5 - Math.random());
    setCurrentCountry(random);
    setOptions(shuffled);
    setMessage('');
  };

  const handleGuess = (option) => {
    if (option.name.common === currentCountry.name.common) {
      setMessage('✅ Correct!');
      setScore(score + 1);
    } else {
      setMessage(`❌ Oops! It was ${currentCountry.name.common}`);
    }
    setTimeout(() => getNewQuestion(), 2000);
  };

  useEffect(() => {
    fetchCountries();
    const interval = setInterval(() => getNewQuestion(), 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home" className="hero">
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

        {/* 🌍 Country Quiz Game */}
        <div className="country-quiz">
          <h2>🌍 Guess the Flag!</h2>
          <p>Score: <strong>{score}</strong></p>
          {currentCountry ? (
            <>
              <img
                src={currentCountry.flags.svg}
                alt="Country Flag"
                className="flag-img"
              />
              <div className="options">
                {options.map((option, index) => (
                  <button
                    key={index}
                    className="option-btn"
                    onClick={() => handleGuess(option)}
                  >
                    {option.name.common}
                  </button>
                ))}
              </div>
              {message && <p className="message">{message}</p>}
            </>
          ) : (
            <p>Loading flag...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
