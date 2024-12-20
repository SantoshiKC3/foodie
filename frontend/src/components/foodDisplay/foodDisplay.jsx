import React, { useContext } from 'react'
import './foodDisplay.css'
import { StoreContext } from '../../context/storeContex'
import FoodItem from '../foodItem/foodItem'


function foodDisplay({category}) {

    const{food_list} = useContext(StoreContext)

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => (
          <FoodItem key={index} item={item.id} name={item.name} description={item.description} price={item.price} image={item.image} />
        ))}
      </div>
    </div>
  )
}

export default foodDisplay