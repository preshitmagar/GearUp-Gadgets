import React from 'react';
import Hero from '../Components/MainPage/Hero';
import Trending from '../Components/Trending/Trending';
import Offers from '../Components/Offers/Offers';
import NewCollection from '../Components/NewCollection/Newcollection';
import Newsletter from '../Components/Newsletter/Newsletter';
import Footer from '../Components/Footer/Footer';



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