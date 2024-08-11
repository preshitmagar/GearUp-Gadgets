import React from 'react';
import './Newsletter.css'

const Newsletter = () => {
    return(
        <div className='newsletter-before'>
        <div className='newsletter'>
            <h1>Get the latest stuff on your email.</h1>
            <p>Exclusive offers and early bird status for sales.</p>
            <div>
            <input type='email' placeholder='Email ID'/>
            <button className='input-btn'>SUBSCRIBE</button>
            </div>
        </div>
        </div>
    )

}

export default Newsletter;