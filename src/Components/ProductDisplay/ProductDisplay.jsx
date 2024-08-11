
import './ProductDisplay.css'
import staricon from '../Assets/star_icon.png'
import staricondull from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../ContextApis/ShopContext'
import { useContext } from 'react'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);

    return(
        <div className='productDisplay'>
            <div className="productDisplay-left">
                <div className="productDisplay-img-list">
                    <img src={product.image} alt='' />
                    <img src={product.image} alt='' />
                </div>
            </div>
            <div className="productDisplay-image">
                <img src={product.image} alt='' />

            </div>
            <div className="productDisplay-right">
                <h1>{product.name}</h1>
                <div className="productDisplay-rightstar">
                    <img src={staricon} alt='' />
                    <img src={staricon} alt='' />
                    <img src={staricon} alt='' />
                    <img src={staricon} alt='' />
                    <img src={staricondull} alt='' />
                    <p>(1342)</p> 
                </div>
            <div className="productDisplay-right-prices">
                <div className="productDisplay-right-price-old">Rs. {product.old_price}</div>
                <div className="productDisplay-right-price-new">Rs. {product.new_price}</div>
            </div>
            <div className="productDisplay-right-description">
                Gaming gear, which is perfect for your gaming needs as well as E-sport demands. We use the highest quality of shipping and storage to ensure top-notch quality and safety.
            </div>
            <button onClick={()=>{addToCart([product.id])}}>Add to cart</button>
            <p className='productDisplay-right-category'><span>Category :Gaming, Esports, Budget</span></p>
            </div>
        </div>
        
    )

}

export default ProductDisplay;