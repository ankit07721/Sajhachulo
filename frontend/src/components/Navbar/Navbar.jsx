// import React from 'react'
// import { assets } from '../../assets/assets'

// const Navbar = () => {
//     return (
//         <div>
//             <div className='navbar flex justify-between items-center'>
//                 <img src={assets.logo} alt="" />
//                 <ul>
//                     <li>Home</li>
//                     <li>Menu</li>
//                     <li>Shop</li>
//                     <li>About Us</li>
//                     <li>Contact Us</li>
//                 </ul>
//                 <div>
//                     <img src={assets.search_icon} alt="" />
//                     <div className='navbar-search-icon'>
//                         <img src={assets.basket_icon} alt="" />
//                         <div className="dot"></div>
//                     </div>
//                     <button>sign in</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Navbar



















import React, { useState } from "react";
import { assets } from "../../assets/assets";
import "./Navbar.css";
const Navbar = () => {
    const [Menu, setMenu] = useState("Home")
    return (
        <nav className="navbar  flex justify-between w-full sticky  shadow-sm ">
            {/* <div className="navbar    bg-red-500 py-4 flex  justify-between "> */}

            {/* Logo */}
            <div className="flex items-center">
                <img
                    src={assets.logo}
                    alt="logo"
                    className="h-10 cursor-pointer"
                />
            </div>

            {/* Menu */}
            <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700 cursor-pointer">
                <li onClick={() => setMenu("")} className={Menu === "home" ? "active" : ""}>
                    Home
                </li>
                <li onClick={() => setMenu("menu")} className={Menu === "menu" ? "active" : ""}>
                    Menu
                </li>
                <li onClick={() => setMenu("shop")} className={Menu === "shop" ? "active" : ""}>
                    Shop
                </li>
                <li onClick={() => setMenu("about")} className={Menu === "about" ? "active" : ""}>
                    About Us
                </li>
                <li onClick={() => setMenu("contact")} className={Menu === "contact" ? "active" : ""}>
                    Contact Us
                </li>
            </ul>
            <div className="flex gap-12">


                {/* Right Section */}
                <div className="flex items-center gap-6">

                    {/* Search Icon */}
                    <img
                        src={assets.search_icon}
                        alt="search"
                        className="h-5 w-5 cursor-pointer hover:scale-110 transition"
                    />

                    {/* Cart */}
                    <div className="relative cursor-pointer">
                        <img
                            src={assets.basket_icon}
                            alt="cart"
                            className="h-6 w-6"
                        />
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                            .                        </span>
                    </div>

                    {/* Button */}
                    <button className=" w-24 h-8 border border-black text-black rounded-md hover:bg-orange-500 hover:text-white transition font-medium">
                        Sign In
                    </button>
                </div>
            </div>
            {/* </div> */}
        </nav>
    );
};

export default Navbar;
