import React from 'react'
import './Header.css';
import logo from "../logo.jpeg"


export const Header = () => {
  return (
    <div className='navbar'>
      <img alt='logo' src={logo} className='logo'/>

      <div className='serach-box'>
        <input placeholder='Search ...' type=''/>
        <img src='' alt='search-icon'/>
      </div>

      <img src='' alt='toggle-icon' className='toggle-icon'/>
    </div>
  )
}
