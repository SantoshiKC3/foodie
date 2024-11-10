import React from 'react'
import icons from '../../assets/icons/icons.js'
import FoodieOrange from '../../assets/logo/foodie-orange.png';

import './footer.css'

const Footer = () => {
    return (

        <><div className="footer">
                <div className="contain">
                <div className="col social">
                        <a href="#"><img src={FoodieOrange} alt="" /></a>
                        <h1>Social Links</h1>
                        <ul>
                        <li>
                            <a href="#"><img src={icons.twitter} width="32" alt="Social Icon 1" /></a>
                            </li>
                        <li><a href="#"><img src={icons.instagram} width="32" alt="Social Icon 2" /></a></li>
                        <li><a href="#"><img src={icons.facebook} width="32" alt="Social Icon 2" /></a></li>
                        </ul>
                    </div>
                    
                    <div className="col">
                        <h1>Company</h1>
                        <ul>
                            <li>About</li>
                            <li>Mission</li>
                            <li>Services</li>
                            <li>Social</li>
                            <li>Get in touch</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h1>Products</h1>
                        <ul>
                            <li>About</li>
                            <li>Mission</li>
                            <li>Services</li>
                            <li>Social</li>
                            <li>Get in touch</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h1>Accounts</h1>
                        <ul>
                            <li>About</li>
                            <li>Mission</li>
                            <li>Services</li>
                            <li>Social</li>
                            <li>Get in touch</li>
                        </ul>
                    </div>
                    

                    <div className="clearfix"></div>
                </div>
            </div>
            
        </>
    )
}

export default Footer