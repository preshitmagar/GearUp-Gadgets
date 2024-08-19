import React from 'react';
import Hero from '../Components/HeroPage/Hero';
import Trending from '../Components/Trending/Trending';
import Offers from '../Components/Offers/Offers';
import NewCollection from '../Components/NewCollection/Newcollection';
import Newsletter from '../Components/Newsletter/Newsletter';



const Shop = () => {
    return(
        <div>
            <Hero />
            <Trending />
            <Offers />
            <NewCollection />
            <Newsletter />
        </div>
    )

}

export default Shop;