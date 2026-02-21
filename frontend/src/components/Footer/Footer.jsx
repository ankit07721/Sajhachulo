import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur molestias omnis saepe voluptatem, esse, rem itaque rerum vitae iste minus cum eum nisi! Voluptas, aliquam aspernatur. Porro doloribus animi suscipit?</p>
                    <div className="footer-social-icons ">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+977 9742913201</li>
                        <li>contact@fooddelivery.com</li>
                    </ul>

                </div>
            </div>
            <hr />
            <p className="footer-copyright">
                Copyright 2026 Food Delivery. All rights reserved.
            </p>
        </div>
    )
}

export default Footer