import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'
import search_icon from '../../assets/search_icon.webp'
import bell_icon from '../../assets/bell_icon.jpg'
import profile_image from '../../assets/profile_image.jpg'
import dropdown_icon from '../../assets/dropdown_icon.svg'
import { logout } from '../../firebase'

const Navbar = () => {
  return (
    <div className='navbar'> 
      <div className='navbar-left'>
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browae by Languages</li>
        </ul>
      </div>
      <div className='navbar-right'>
        <img src={search_icon} alt='' className='icons'/>
        <p>Children</p>
        <img src={bell_icon} alt='' className='icons'/>
        <div className='navbar-profile'>
          <img src={profile_image} alt='' className='profile'/>
          <img src={dropdown_icon} alt='' />
          <div className='dropdown'>
            <p onClick={()=>{logout()}}>Sign out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
