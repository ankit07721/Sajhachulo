import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Placeholder from './pages/PlaceOrder/Placeholder'
import Footer from './components/Footer/Footer'
import Loginpopup from './components/Loginpopup/Loginpopup'
import HygieneVerification from './pages/hygieneverification/Hygieneverification'
import BecomeChefPage from './components/becomeachef/BecomeChefPage'
import TiffinSubscription from './pages/tiffinsubscription/TiffinSubscription'
import BrowseChefs from './pages/browsechef/BrowseChefs'
import MealPlans from './pages/mealplan/MealPlans'
const App = () => {

  const [showlogin, setShowLogin] = useState(false)

  return (
    <>
      {showlogin ? <Loginpopup setShowLogin={setShowLogin} /> : <></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/placeorder' element={<Placeholder />} />
          <Route path='/hygieneverification' element={<HygieneVerification />} />
          <Route path='/becomechef' element={<BecomeChefPage />} />
          <Route path='/tiffinsubscription' element={<TiffinSubscription />} />
          <Route path='/browsechefs' element={<BrowseChefs />} />
          <Route path='/mealplans' element={<MealPlans />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default App