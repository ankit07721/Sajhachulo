import React from 'react'
import "./Exploremenu.css"
import { menu_list } from '../../assets/assets'
const Exploremenu = ({ category, setCategory }) => {
    return (
        <div className='flex flex-col  gap-6' id='explore-menu '>
            <h1 className='text-[#262626] font-bold text-4xl'>Explore our menu</h1>
            <p>Choose from a diverse menu featuring a detectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time</p>
            <div className='explore-menu-list explore-menu '>
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className='explore-menu-list-item'>
                            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                            <p className='text-[#747474] text-lg cursor-pointer'>{item.menu_name}</p>
                        </div>
                    )
                })}

            </div>
            <div>

            </div>
        </div>
    )
}

export default Exploremenu