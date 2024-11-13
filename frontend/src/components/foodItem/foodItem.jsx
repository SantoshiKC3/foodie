import React, { useContext} from 'react'
import './foodItem.css'
import { images } from '../../assets/images/images'
import { StoreContext } from '../../context/storeContex';


function foodItem({ id, name, price, description, image }) {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext)

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt="" />
        {
          !cartItems[id]
            ? <img className='add' onClick={() => addToCart(id)} src={images.add_icon_white} alt="" />
            : <div className="food-item-counter">
              <img src={images.remove_icon_red}  onClick={() => removeFromCart(id)} alt="" />
              <p>{cartItems[id]}</p>
              <img src={images.add_icon_green}  onClick={() => addToCart(id)} alt="" />
            </div>
        }

      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={images.rating_starts} alt="" />
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">Rs{price}</p>
      </div>
    </div>
  )
}

export default foodItem