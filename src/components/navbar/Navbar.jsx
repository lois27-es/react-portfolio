import React, { useState } from 'react'
import './Navbar.css'
import underline from '../../assets/nav_underline.svg'

const Navbar = () => {  
    const [menu, setMenu] = useState("home");

    return (
        <div className='navbar'>
            <h1 className="nav-header">PORTFOLIO</h1>
            <ul className="nav-menu">
                <li>
                    <p onClick={() => setMenu("home")}>Home</p>
                    {menu === "home" ? <img src={underline} alt=''/> : <></>}
                </li>
                <li>
                    <p onClick={() => setMenu("about me")}>About Me</p>
                    {menu === "about me" ? <img src={underline} alt=''/> : <></>}
                </li>
                <li>
                    <p onClick={() => setMenu("services")}>Services</p>
                    {menu === "services" ? <img src={underline} alt=''/> : <></>}
                </li>
                <li>
                    <p onClick={() => setMenu("portfolio")}>Portfolio</p>
                    {menu === "portfolio" ? <img src={underline} alt=''/> : <></>}
                </li>
                <li>
                    <p onClick={() => setMenu("contact")}>Contact</p>
                    {menu === "contact" ? <img src={underline} alt=''/> : <></>}
                </li>
            </ul>
            <div className="nav-connect">Connect with me</div>
        </div>
    )
}

export default Navbar
