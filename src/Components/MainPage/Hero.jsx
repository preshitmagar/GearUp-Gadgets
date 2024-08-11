import React from 'react';
import './Hero.css';
import arrow_icon from '../Assets/arrow.svg'
import finalmouse_img from '../Assets/file2.png'

const Hero = () => {
    return(
        <div className='hero'>
            
            <div className='hero-left'>
                <h2>Finalmouse mice now in stock!</h2>
                <div>
                <p>Grab them before </p>
                <p>they leave!</p>
                </div>
            <div className="hero-latest-btn">
                <div>Shop now</div>
                <img src={arrow_icon} alt='' />
            </div>
            </div>
            <div className='hero-right'>
                <img src={finalmouse_img} alt='' />
            </div>

        </div>
    )

}

export default Hero;