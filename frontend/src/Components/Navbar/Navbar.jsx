import React, { useState } from 'react'
import'./Navbar.css'

import logo from '../../public/Assests/logo.png';
import cart_icon from '../../public/Assests/cart_icon.png';

const Navbar = () => {

    const [menu,setMenu] = useState("shop")

   return (
    <div>
      <div className="navbar">
        <div className="nav-logo">
         <img src={logo} alt="" />
         <p>SHOPPER</p>
         <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><link to='/'>Shop</link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><link to='/'>Men</link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><link to='/'>Women</link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><link to='/'>Kids</link>{menu==="kids"?<hr/>:<></>}</li>
         </ul>
         <div className="nav-login-cart">
            <button>Login</button>
            <img src={cart_icon} alt="" /> 
            <div className="nav-cart-count">0</div>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
