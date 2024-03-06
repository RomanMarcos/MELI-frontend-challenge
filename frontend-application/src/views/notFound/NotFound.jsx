import React from 'react'
import notFoundLogo from '../../assets/notFound.png';
import './notFound.scss';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className='notFound-container'>
      <div className='notFound-container-img'>
        <img src={notFoundLogo} alt='Page not found' />
      </div>
      <div className='notFound-container-text'>
        <h4 className='notFound-text'>Parece que esta página no existe</h4>
      </div>
      <div className='notFound-container-link'>
        <Link to={'/'} className='notFound-link' > Ir a la pagina principal </Link>
      </div>
    </div>
  )
}
