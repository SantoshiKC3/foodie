import React from 'react'
import './homepage.css'
import Header from '../../components/header/header.jsx';
import Footer from '../../components/footer/footer.jsx';
import BannerFood from '../../assets/images/banner-food.png';


const Homepage = () => {
  return (
    <>
      <Header/>
      <div className="banner">
        <div className="container">
            <div className="content">
            <div className="glassmorphism">
              <div className="searchbar">
                <input type="text" placeholder="Search Food" />
              </div>
              <img src={BannerFood} alt="Foods Img" />
              </div>
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
