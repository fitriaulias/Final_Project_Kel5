import React from 'react'
import { Link } from 'react-router-dom'

function SidebarRight() {
  return (
      <div className='sidebar-right'>
        <div className='sidebar-right-content'>
          <div className='sidebar-content-search'>
            Ini field buat search
          </div>
          <div className='sidebar-content-click-me'>
            Ini field buat click me
          </div>
          <div className='sidebar-content-about-us'>
          <Link to="/aboutus" className='page-content-about'>About Us</Link>
          </div>
        </div>
      </div>
  )
}

export default SidebarRight