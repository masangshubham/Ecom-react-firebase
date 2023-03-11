import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './Components/Home'
import { Login } from './Components/Login'
import { Signup } from './Components/Signup'
import { NotFound } from './Components/NotFound'
import { AddProducts } from './Components/AddProducts'
import { Cart } from './Components/Cart'

export const App = () => {
  return (
    
      <div>
       <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/add-products" element={<AddProducts />}/>
        <Route path="/cart" element={<Cart />}/>     
        <Route element={<NotFound />}/>
      </Routes>
      </Router> 
      </div>
    
    
  )
}

export default App
