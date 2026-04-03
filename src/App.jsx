import { useState } from 'react'

import './App.css'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Products from './Products'
import Transport from './Transport'
import Contact from './Contact'
import Login from './Login'
import Forgotpage from './Forgotpage'
import TodayMarketing from './TodayMarketing'
import Singup from './Singup'
import Cart from './Cart'
import ViewMaterials from './ViewMaterials'

function App() {

  return (
    <>
    <Navbar/>

    <Routes>
      <Route path="/"element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Products" element={<Products/>}/>
      <Route path="/Transport" element={<Transport/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Forgotpage"element={<Forgotpage/>}/>
      <Route path="/TodayMarketing"element={<TodayMarketing/>}/>
      <Route path="/Cart"element={<Cart/>}/>
      <Route path="/Singup" element={<Singup/>}/>
      <Route path="/ViewMaterials" element={<ViewMaterials/>}/>
    </Routes>
      
    </>
  )
}

export default App
