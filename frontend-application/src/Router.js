import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Results } from './views/results/Results';
import { ProductDetail } from './views/productDetail/ProductDetail';
import { Home } from './views/home/Home';

export const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/items' element={<Results />} />
        <Route path='/items/:id' element={<ProductDetail />} />
    </Routes>
  )
}
