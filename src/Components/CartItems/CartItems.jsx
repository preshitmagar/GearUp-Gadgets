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
                        <div className="CartItems-format CartItems-main-format">
                            <img src={e.image} alt='' className='carticon-product-icon' />
                            <p>{e.name}</p>
                            <p>Rs. {e.new_price}</p>
                            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                            <p>Rs. {e.new_price * cartItems[e.id]}</p>
                            <img className='carticon-remove-icon'src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                        </div>
                        <hr />
                    </div>
                }
                return null;
            })}
            <div className="CartItems-down">
                <div className="CartItems-total">
                    <h1>Cart Total</h1>
                    <div>
                        <div className="CartItems-total-item">
                            <p>Subtotal</p>
                            <p>Rs. {0}</p>
                        </div>
                        <hr />
                        <div className="CartItems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="CartItems-total-item">
                            <h3>Total</h3>
                            <h3>Rs. {0}</h3>
                        </div>
                    </div>
                    <button>CHECKOUT</button>
                </div>
                <div className="CartItems-promocode">
                    <p>If you have a promocode, enter it here.</p>
                    <div className="CartItems-promo-box">
                        <input type="text" placeholder='Promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default CartItems;