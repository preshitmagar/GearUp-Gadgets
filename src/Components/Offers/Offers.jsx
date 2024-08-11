import React from 'react';
import './Offers.css'
import OfferImage from '../Assets/oofer2.webp'

const Offers = () => {
    return(
        <div className='offers-back'>
            <div className="offers-front">
                <div className="offers-left">
                    <h1>Exclusive Deals</h1>
                    <h1>For a limited time</h1>
                    <p>ON SELECT PRODUCTS*</p>
                    <button>CHECK OUT NOW</button>
                </div>
                <div className="offers-right">
                    <img src={OfferImage} alt='' />
                </div>
            </div>
        </div>
    )

}

export default Offers;