// import React from 'react'
// import "./Header.css"
// const Header = () => {
//     return (
//         <div className=''>
//             <div className="header flex items-center justify-center ">
//                 <div className="header-contents">
//                     <h2>Order your favourite food here</h2>
//                     <p>Choose from a diverse menu featuring a detectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time</p>
//                     <button className='bg-white border-none color-[#747474] font-medium w-28 h-12 rounded-4xl'>View Menu</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Header


// import React from 'react'
// import { assets } from '../../assets/assets'

// const Header = () => {
//     return (
//         <div className='flex justify-center items-center background-red-500  w-full h-screen bg-red-500'>
//             <div className='flex-1 bg-green-500  h-[400px] flex items-center gap-6 flex-col  '>
//                 <h1 className='font-bold text-4xl w-[45%]'>Your Favourite Food Delivered Hot & Fresh</h1>
//                 <p className='w-[45%]'>Choose from a diverse menu featuring a detectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time</p>
//                 <div className='flex gap-2 '>


//                     <button className='bg-[#FE9E0D] w-32  h-8 rounded-md text-white'>View Menu</button>
//                     <button className='bg-[#FE9E0D] w-32  h-8 rounded-md text-white'>Order Now</button>
//                 </div>
//             </div>
//             <div className='flex-1'>
//                 <img src={assets.Homebackground} alt="" />
//             </div>

//         </div>
//     )
// }

// export default Header




import React from "react";
import { assets } from "../../assets/assets";
import "./Header.css";
const Header = () => {
    return (
        <section className="header w-full min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center">

            <div className="header-contents max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-16">

                {/* LEFT SIDE - TEXT CONTENT */}
                <div className=" flex-1 gap-4 flex flex-col space-y-8 text-center  lg:text-left">

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
                        Fresh & Delicious Food
                        <span className="block text-[#FE9E0D]">
                            Delivered To Your Doorstep
                        </span>
                    </h1>

                    <p className="text-gray-600 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        Experience a wide variety of mouth-watering dishes prepared with
                        premium ingredients and expert culinary skills. We bring restaurant
                        quality meals straight to your home, hot and fresh.
                    </p>

                    <div className="flex justify-center lg:justify-start gap-5">
                        <button className="bg-[#FE9E0D] hover:bg-orange-600 text-white w-32 h-10 rounded-xl font-semibold shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
                            Order Now
                        </button>

                        <button className="border-2 border-[#FE9E0D] text-[#FE9E0D] w-32 h-10 rounded-xl font-semibold hover:bg-orange-50 transition duration-300">
                            View Menu
                        </button>
                    </div>

                </div>

                {/* RIGHT SIDE - IMAGE */}
                <div className="flex-1 flex justify-center relative">

                    <div className="homeimage absolute w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-40"></div>
                    <img src={assets.Bannerhome} alt="Banner" className="absolute top-0 left-0 w-full h-full object-cover" />
                    <img
                        src={assets.Homebackground}
                        alt="Food Delivery"
                        className="relative w-full max-w-lg drop-shadow-2xl"
                    />

                </div>

            </div>
        </section>
    );
};

export default Header;










