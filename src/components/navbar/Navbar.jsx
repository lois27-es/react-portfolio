import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Navbar.css';
import underline from '../../assets/nav_underline.svg';

const Navbar = () => {
  const [menu, setMenu] = useState('home');

  return (
    <div className="navbar">
      <h1 className="nav-header">PORTFOLIO</h1>

      <ul className="nav-menu">
        <li>
          <AnchorLink className="anchor-link" href="#home" offset={50} onClick={() => setMenu('home')}>
            <p>Home</p>
            {menu === 'home' && <img src={underline} alt="" />}
          </AnchorLink>
        </li>

        <li>
          <AnchorLink className="anchor-link" href="#about" offset={50} onClick={() => setMenu('about')}>
            <p>About</p>
            {menu === 'about' && <img src={underline} alt="" />}
          </AnchorLink>
        </li>

        <li>
          <AnchorLink className="anchor-link" href="#services" offset={50} onClick={() => setMenu('services')}>
            <p>Services</p>
            {menu === 'services' && <img src={underline} alt="" />}
          </AnchorLink>
        </li>

        <li>
          <AnchorLink className="anchor-link" href="#portfolio" offset={50} onClick={() => setMenu('portfolio')}>
            <p>Portfolio</p>
            {menu === 'portfolio' && <img src={underline} alt="" />}
          </AnchorLink>
        </li>

        <li>
          <AnchorLink className="anchor-link" href="#contact" offset={50} onClick={() => setMenu('contact')}>
            <p>Contact</p>
            {menu === 'contact' && <img src={underline} alt="" />}
          </AnchorLink>
        </li>
      </ul>

      <div className="nav-connect">
        <AnchorLink className="anchor-link" href="#contact" offset={50}>
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
