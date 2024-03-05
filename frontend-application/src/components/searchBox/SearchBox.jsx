import React from 'react'
import searchIcon from '../../assets/ic_Search.png';
import './searchBox.scss';

export const SearchBox = ({ keyword, setKeyword, search, placeholder }) => {
  return (
    <div className='searchBox-container'>
        <input onChange={setKeyword} className='searchBox-input' value={keyword} placeholder={placeholder} aria-label='producto a buscar' />
        <button onClick={search} className='searchBox-button' aria-label='buscar'>
            <img className='searchBox-button-img' alt='buscar' src={searchIcon} />
        </button>
    </div>
  )
}
