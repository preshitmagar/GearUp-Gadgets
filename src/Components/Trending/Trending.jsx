import React from 'react';
import './Trending.css'
import data_product from '../Assets/pop-mouse-data'
import Item from '../Item/item'

const Trending = () => {
    return(
        <div className='Trending'>
            <h1>Trending in Gaming mouse</h1>
            <hr />
            <div className="trending-item">
                {data_product.map((item,i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new-price={item.new_price} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )

}

export default Trending;