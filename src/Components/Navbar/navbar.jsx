import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import cart_icon from '../Assets/cart-shopping.svg'
import logo from '../Assets/logo2.png'
import { ShopContext } from '../../ContextApis/ShopContext';


const Navbar = () => {

    const [menu, setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);

    return (
        <div className='navbar'>
            <div className='nav-logo'>
            <Link style={{textDecoration: 'none'}}  to='/'>
                <img onClick={() => {setMenu("shop")}} src={logo} alt="" />
                <p>GearUp</p>
                {menu ==="shop" ? <hr />: <></>}
            </Link>
                
            </div>
            <ul className="nav-menu">
                <li onClick={() => {setMenu("shop")}}><Link style={{textDecoration: 'none'}}  to='/'>Shop</Link>{menu ==="shop" ? <hr />: <></>}</li> 
                <li onClick={() => {setMenu("mouse")}}><Link style={{textDecoration: 'none'}} to='/mouse'>Mouse</Link>{menu ==="mouse" ? <hr />: <></>}</li>
                <li onClick={() => {setMenu("keeb")}}><Link style={{textDecoration: 'none'}} to='/keeb'>Keyboard</Link>{menu ==="keeb" ? <hr />: <></>}</li>
                <li onClick={() => {setMenu("misc")}}><Link style={{textDecoration: 'none'}} to='/misc'>Misc.</Link>{menu ==="misc" ? <hr />: <></>}</li>
            </ul>
            <div className='nav-login-cart'>
                <Link to='/login'><button class="btn">LOGIN</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className='nav-cart-count'>{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar;