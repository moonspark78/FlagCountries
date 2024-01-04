import React from 'react'
import './Header.css';
import logo from "../logo.jpeg"
import search from "../search-w.png"


export const Header = () => {
  return (
    <div className='navbar'>
      <img alt='logo' style={{height: "80px"}} src={logo} className='logo'/>

      <div className='serach-box'>
        <input placeholder='Search ...' type=''/>
        <img src={search} alt='search-icon'/>
      </div>

    </div>
  )
}
