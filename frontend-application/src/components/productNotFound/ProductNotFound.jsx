import React from 'react'
import './productNotFound.scss';

import productNotFound from '../../assets/productNotFound.png';

export const ProductNotFound = () => {
  return (
    <div className='productNotFound-container'>
        <div className='productNotFound-container-elements'>
            <div className='productNotFound-img'>
                <img src={productNotFound} alt="Product not found" />
            </div>
            <div className='productNotFound-text'>
                <h3>No hay publicaciones que coincidan con tu búsqueda</h3>
                <ul>
                    <li><strong>Revisá la ortografía</strong> de la palabra.</li>
                    <li>Usá <strong>palabras más genéricas</strong> o menos palabras.</li>
                    <li>Navegá por las categorias para encorntar un producto similar.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
