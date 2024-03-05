import React from 'react'
import searchIcon from '../../assets/ic_Search.png';
import './searchBox.scss';

export const SearchBox = ({ placeholder }) => {
  return (
    <div className='searchBox-container'>
        <input className='searchBox-input' value='' placeholder={placeholder} aria-label='producto a buscar' />
        <button className='searchBox-button' aria-label='buscar'>
            <img className='searchBox-button-img' alt='buscar' src={searchIcon} />
        </button>
    </div>
  )
}
