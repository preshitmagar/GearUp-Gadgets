import React, { useContext } from 'react'
import { ShopContext } from '../../ContextApis/ShopContext.jsx'
import './CartItems.css'
import remove_icon from '../Assets/cart-x-ico.png'


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
            {all_product.map((e)=>{
                if(cartItems[e.id]>0)
                {
                    return <div>
                        <div className="cartitems-format">
                        <img src={e.image} alt='' className='carticon-product-icon' />
                        <p>{e.name}</p>
                        <p>Rs. {e.new_price}</p>
                        <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                        <p>{e.new_price * cartItems[e.id]}</p>
                        <img src={remove_icon} onClick={()=>{removeFromCart()}} alt="" />
                        </div>
                        <hr />
                    </div>
                }
            })}
        </div>
    )

}

export default CartItems;