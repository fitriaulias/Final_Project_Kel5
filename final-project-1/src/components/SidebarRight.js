import React from 'react'
import { Link } from 'react-router-dom'
import SaveIco from '.././assets/archive-add.svg'
import { setSearch } from '../features/SearchSlice'
import { useDispatch } from 'react-redux'
import {useNavigate} from "react-router-dom"


function SidebarRight() {
  const dispatch = useDispatch()
  const nav = useNavigate()
  let inputhandler = (e) => {
    if(e.key === 'Enter'){
      var lowerCase = e.target.value.toLowerCase()
      dispatch(setSearch(lowerCase))
      // store.dispatch(extendedApiSlice.endpoints.ge)
      
      e.target.value = ''
      nav("./Search")
    }
  }

  return (
      <div className='sidebar-right'>
        <div className='sidebar-right-content'>
          <div className='sidebar-content-search'>
            <input type="text" placeholder="Search article here..." onKeyDown={inputhandler}></input>
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