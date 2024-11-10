import React from 'react'
import './exploremenu.css'
import menu from '../../assets/images/menu_list'



function Exploremenu() {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>explore our menu</h1>
      <p className='explore-menu-text'>choose diverse menu featuring number of resturants.</p>
      <div className="explore-menu-list">
        {menu_list.map((item, index)=>{
          return (
            <div key={index} className="explore-menu-item">
              <img src={item.menu_image} alt="" />
              <p> {item.menu_name}</p>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Exploremenu