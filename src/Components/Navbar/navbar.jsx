import React, {useContext, useRef, useState} from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import cart_icon from '../Assets/cart-shopping.svg'
import logo from '../Assets/logo2.png'
import { ShopContext } from '../../ContextApis/ShopContext';
import drop_arrow from '../Assets/down-arrow.png';


const Navbar = () => {

    const [menu, setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();
    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

    return (
        <div className='navbar'>
            <div className='nav-logo'>
            <Link style={{textDecoration: 'none'}}  to='/'>
                <img onClick={() => {setMenu("shop")}} src={logo} alt="" />
                <p>GearUp</p>
                {menu ==="shop" ? <hr />: <></>}
            </Link>
                
            </div>
            <img className='nav-dropdown' onClick={dropdown_toggle} src={drop_arrow} alt='' />
            <ul ref={menuRef} className="nav-menu">
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