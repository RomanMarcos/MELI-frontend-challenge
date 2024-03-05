import React from 'react'
import './navBar.scss'
import { Link } from 'react-router-dom'
import logo from '../../assets/Logo_ML.png'
import { SearchBox } from '../searchBox/SearchBox'

export const NavBar = () => {
  return (
    <>
        <div className='navBar-container'>
            <Link to='/'> <img src={logo} alt='Logo mercado libre' className='logo' /></Link>
            <SearchBox placeholder={"Nunca dejes de buscar"} />
        </div>
    </>
  )
}
