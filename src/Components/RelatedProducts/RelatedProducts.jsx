import React from 'react';
import './RelatedProducts.css'
import data_product from '../Assets/pop-mouse-data.js'
import Item from '../Item/item.jsx'



const RelatedProducts = () => {
    return(
        <div className='relatedProducts'>
            <h1>Related Products</h1>
            <hr />
            <div className="relatedProducts-item">
                {data_product.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new-price={item.new_price} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>
        </div>
    )

}

export default RelatedProducts;