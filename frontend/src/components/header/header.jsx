import React from 'react';
import './header.css'
import Foodie from '../../assets/logo/Foodie.png';

function Header() {
  return (
    <header className="bg-orange-500 text-white py-4 px-8 flex justify-between items-center">
      <a href="#"><img src={Foodie} alt="" /></a>
      <div>
        <button className="bg-white text-orange-500 px-4 py-2 rounded-md mr-4">Order</button>
        <button className="bg-white text-orange-500 px-4 py-2 rounded-md mr-4">Cart</button>
        <button className="bg-white text-orange-500 px-4 py-2 rounded-md">Login</button>
      </div>
    </header>
  );
}

export default Header;