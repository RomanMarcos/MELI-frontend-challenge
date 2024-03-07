import React, { useState } from 'react'
import { NavBar } from '../../components/navBar/NavBar'
import { useNavigate } from 'react-router-dom';

export const Search = () => {

    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const changeInput = (e) => {
        setInput(e.target.value);
    }

    const search = () => {
        navigate(`/items?search=${input}`);
    }

  return (
    <NavBar keyword={input} setKeyword={changeInput} search={search} />
  )
}
