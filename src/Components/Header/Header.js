import React from 'react'
import "./Header.css"
import "./../../index.css"
import { Link } from 'react-router-dom'
import {WEB_NAME} from "./../../config/Data"

function header() {
  return (
    <div className='header'>
      <h1 className='header-name'>{WEB_NAME}</h1>

      <div className='header-links'>
        <Link to="/" className='nav-name'>Home</Link>
        <Link to="/about" className='nav-name'>About</Link>
        <Link to="/contact" className='nav-name'>Contact</Link>
      </div>
    </div>
  )
}

export default header