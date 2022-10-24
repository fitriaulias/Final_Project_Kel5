import React from 'react'
import { Link } from 'react-router-dom'
import SaveIco from '.././assets/archive-add.svg'

function SidebarRight() {
  return (
      <div className='sidebar-right'>
        <div className='sidebar-right-content'>
          <div className='sidebar-content-search'>
            <input type="text" placeholder="Search article here..."></input>
          </div>
          <div className='sidebar-content-click-me'>
            <img src={SaveIco} alt="Click me"/> Click Save! to add news to your reading list
          </div>
          <div className='sidebar-content-about-us'>
          <Link to="/aboutus" className='page-content-about'>About Us</Link>
          </div>
        </div>
      </div>
  )
}

export default SidebarRight