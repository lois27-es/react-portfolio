import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <img src={profile_img} alt="profile" className="hero-img"/>
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
                    <div className="hero-connect">Connect with me</div>
                    <div className="hero-resume">My Resume</div>
                </div>
            </div>
        </div>
    )
}

export default Hero
