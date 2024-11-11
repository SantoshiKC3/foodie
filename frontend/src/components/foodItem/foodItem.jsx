import React from 'react'
import './foodItem.css'

function foodItem({id, name, price, description, image}) {
  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img className='food-item-image' src={image} alt="" />
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                {/* hyaaa samma vayo */}
                <p>{name}</p>
                <img src={AuthenticatorAssertionResponse.rating.stars} alt="" />
            </div>
        </div>
    </div>
  )
}

export default foodItem