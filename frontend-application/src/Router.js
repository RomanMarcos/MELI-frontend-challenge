import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Results } from './views/results/Results';
import { ProductDetail } from './views/productDetail/ProductDetail';

export const Router = () => {
  return (
    <Routes>
        <Route path='/items' element={<Results />} />
        <Route path='/items/:id' element={<ProductDetail />} />
    </Routes>
  )
}
