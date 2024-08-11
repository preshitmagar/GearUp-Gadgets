import React, { useContext } from 'react'
import { ShopContext } from '../../ContextApis/ShopContext.jsx'
import './CartItems.css'



const CartItems = () => {
    const {all_product, cartItems, removeFromCart} = useContext(ShopContext);
    return(
        <div className='CartItems'>
            <div className="CartItems-main-format">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            <div>
                <div className="cartitems-format">
                    <img src='' alt='' className='carticon-product-icon' />
                </div>
            </div>
        </div>
    )

}

export default CartItems;