import React, { useState } from 'react';
import './homepage.css'
import Header from '../../components/header/header.jsx';
import Footer from '../../components/footer/footer.jsx';
import { images } from '../../assets/images/images.js';
import Exploremenu from '../../components/exploremenu/exploremenu.jsx';
import FoodDisplay from '../../components/foodDisplay/foodDisplay.jsx';




const Homepage = () => {
  const [category, setCategory] = useState("All");

  return (
    <>
      <Header />

      <div className="banner">
        <div className="container">
          <div className="content">
            <div className="glassmorphism">
              <div className="searchbar">
                <input type="text" placeholder="Search Food" />
              </div>
              <img className='banner-img' src={images.banner_food} alt="Foods Img" />
            </div>
          </div>
        </div>
      </div>

      <Exploremenu  category= {category} setCategory={setCategory}/>

      <FoodDisplay category= {category}/>
      <Footer />
    </>
  );
};

export default Homepage;
