import React, { useState } from 'react';
import './header.css';
import Foodie from '../../assets/logo/Foodie.png';
import User from '../../assets/icons/user.svg';
import Cart from '../../assets/icons/cart.svg';

const Header = () => {
  const [menu, setMenu] = useState('menu');


  return (
    <header className="bg-orange-500 text-white py-4 px-8 flex justify-between items-center">
      <a className='logo' href="#"><img src={Foodie} alt="" /></a>
      <div className="pages">
        <ul>
          <li onClick={() => setMenu('Home')} className={menu === 'Home' ? 'active' : ''}>Home</li>
          <li onClick={() => setMenu('About-Us')} className={menu === 'About-Us' ? 'active' : ''}>About-Us</li>
          <li onClick={() => setMenu('Contact-Us')} className={menu === 'Contact-Us' ? 'active' : ''}>Contact-Us</li>
        </ul>
      </div>
      <div className='link-wrapper'>
        {/* <a href="#"> Order </a> */}
        <a href="#"><img src={Cart} className='icon' alt="" /> <div className="dot"></div> </a>
        <a href="#"><img src={User} className='icon' alt="" /> Login </a>
      </div>
    </header>
  )
}

export default Header;