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
// import Login from "../../pages/Login/Loginnow";
import { Link } from "react-router-dom";
const Navbar = ({ setShowLogin }) => {
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
                <Link to="/" onClick={() => setMenu("")} className={Menu === "home" ? "active" : ""}>Home</Link>

                <Link to="/browsechefs" onClick={() => setMenu("BrowseChefs")} className={Menu === "BrowseChefs" ? "active" : ""}>Browse Chefs</Link>


                <Link to="/mealplans" onClick={() => setMenu("MealPlans")} className={Menu === "MealPlans" ? "active" : ""}>Meal Plans</Link>
                <Link to="/tiffinsubscription" onClick={() => setMenu("TiffinSubscription")} className={Menu === "TiffinSubscription" ? "active" : ""}>Tiffin Subscription</Link>
                <Link to="/becomechef" onClick={() => setMenu("BecomeChef")} className={Menu === "BecomeChef" ? "active" : ""}>Become a chef</Link>
                <Link to="/hygieneverification" onClick={() => setMenu("hygiene")} className={Menu === "hygiene" ? "active" : ""}>Hygiene & Verification</Link>

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
                    <button onClick={() => setShowLogin(true)} className=" w-24 h-8 border border-black text-black rounded-md hover:bg-orange-500 hover:text-white transition font-medium">

                        Login
                    </button>
                </div>
            </div>
            {/* </div> */}
        </nav>
    );
};

export default Navbar;
