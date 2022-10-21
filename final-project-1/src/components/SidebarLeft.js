import React from 'react'
import { Link } from 'react-router-dom'

function SidebarLeft() {
  return (
      <div className='sidebar-left'>
      <div className='sidebar-content'>
        <Link to="/all" className='page-content'>All</Link>
        <Link to="/" className='page-content'>Indonesia</Link>
      </div>
      <div className='sidebar-content-two'>
        <Link to="/programming" className='page-content'>Programming</Link>
        <Link to="/covid19" className='page-content'>Covid-19</Link>
      </div>
        
    </div>
  )
}

export default SidebarLeft