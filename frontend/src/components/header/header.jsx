import React from 'react';
import './header.css'
import Foodie from '../../assets/logo/Foodie.png';
import User from '../../assets/icons/user.svg';
import Cart from '../../assets/icons/cart.svg';



function Header() {
  return (
    <header className="bg-orange-500 text-white py-4 px-8 flex justify-between items-center">
      <a className='logo' href="#"><img src={Foodie} alt="" /></a>
      <div className='link-wrapper'>
      <a href="#"> Order </a>
      <a href="#"><img src={Cart} className='icon' alt=""/>Cart </a>
      <a href="#"><img src={User} className='icon' alt=""/> Login </a>
      </div>
    </header>
  );
}

export default Header;