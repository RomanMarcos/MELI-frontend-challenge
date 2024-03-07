import React from 'react'
import PropTypes from 'prop-types';

import searchIcon from '../../assets/ic_Search.png';
import './searchBox.scss';

/* 

keyword: is the value used on the input (value attribute)
setKeyword: function to handle the onChange action
search: is a function defined on the Search.jsx component and will redirect you to the result view

*/

export const SearchBox = ({ keyword, setKeyword, search, placeholder }) => {

  const handleEvent = (event) => {
    if (event.key === 'Enter') search();
  }

  return (
    <div className='searchBox-container'>
        <input 
          onChange={setKeyword} 
          onKeyDown={(e) => handleEvent(e)}  
          className='searchBox-input'
          value={keyword} 
          placeholder={placeholder} 
          aria-label='producto a buscar' 
        />
        <button onClick={search} className='searchBox-button' aria-label='buscar'>
            <img className='searchBox-button-img' alt='buscar' src={searchIcon} />
        </button>
    </div>
  )
}

SearchBox.propTypes = {
  keyword: PropTypes.string,
  setKeyword: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
  placeholder: PropTypes.string
}