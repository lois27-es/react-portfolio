import React from 'react'
import './footer.css'



const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                  
                    <p>Aspiring Front-End Developer and Web Designer with four years of BSIT experience, eager to create impactful digital experiences. </p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                       
                        <input type="email" placeholder='Enter your email'/>
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom">c 2025 Geraldine Lois Agulto. All rights reserved.</p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                  
                </div>
            </div>

        </div>
    )
}
export default Footer