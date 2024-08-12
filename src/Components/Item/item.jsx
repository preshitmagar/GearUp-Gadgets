import React from 'react';
import './item.css'
import { Link } from 'react-router-dom';

const item = (props) => {
    return(
        <div>
            <div className="item">
                <Link to={`/product/${props.id}`}><img src={props.image} onClick={window.scrollTo(0,0)} alt='' /></Link>
                <p>{props.name}</p>
                <div className="item-prices">
                    <div className="item-new-price">
                        Rs. {props.new_price}
                    </div>
                    <div className="item-old-price">
                        {props.old_price}
                    </div>
                </div>
            </div>    
        </div>
    )

}

export default item;