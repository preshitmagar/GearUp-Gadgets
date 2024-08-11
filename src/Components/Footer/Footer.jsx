import React from 'react';
import './Footer.css'
import footer_logo from '../Assets/logo2.png'
import instaicon from '../Assets/instagram-ico.svg'
import liicon from '../Assets/linkedin-co.svg'
import githubicon from '../Assets/github-ico.svg'

const Footer = () => {
    return(
        <div className='footer'>
            <div className="footer-logo">
                <img src={footer_logo} alt='' />
                <p>GearUp</p>
            </div>
            <ul className='footer-links' >
                <li>Contact</li>
                <li>Policies</li>
                <li>About</li>
                <li>FAQ's</li>
            </ul>
            <div className="footer-social-icons">
                <div className="footer-social-icons-cont">
                    <img src={instaicon} alt='' />
                    <img src={liicon} alt='' />
                    <img src={githubicon} alt='' />
                </div>
            </div>
            <div className="copyright">
                <hr />
                <p>Copyright @ 2024 - Preshit Magar - All rights reserved</p>
            </div>
        </div>
    )

}

export default Footer;