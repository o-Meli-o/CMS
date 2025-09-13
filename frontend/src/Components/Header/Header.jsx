import React from 'react'
import "./Header.css";
import { IoIosSearch } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className='header'>
      <div className='admin-profile'>
        <img src="/img/Meli.jpg" alt="Admin Profile" />
        <div>
          <h1>Meli</h1>
          <h3>Frontend Developer</h3>
        </div>
      </div>

      <div className='header-left-section'>
        <div className='search-box'>
          <input type="text" placeholder='What are you looking for?'/>
          <button><IoIosSearch/></button>
        </div>

        <button className='header-left-icon'><IoMdNotificationsOutline/></button>
        <button className='header-left-icon'><IoSunnyOutline/></button>
      </div>
    </div>
  )
}

export default Header
