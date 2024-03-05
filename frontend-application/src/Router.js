import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Results } from './views/results/Results';

export const Router = () => {
  return (
    <Routes>
        <Route path='/items' element={<Results />} />
    </Routes>
  )
}
