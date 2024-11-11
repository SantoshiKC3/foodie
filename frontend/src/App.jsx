import { useState } from 'react'
import './App.css'
import Homepage from './pages/homepage/homepage'
import {Route, Routes } from 'react-router-dom'
import Cart from './pages/cart/cart'
import Placeorder from './pages/placeorder/placeorder'


const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/order' element={<Placeorder/>}/>
    </Routes>
    </>
  );
};

export default App;
