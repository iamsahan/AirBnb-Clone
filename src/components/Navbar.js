import React from 'react'
import logo from '../images/airbnb-logo.png'
import './index.css'

function Navbar() {
    return (
    <nav className='nav'>
        <img src={logo} alt='logo' className='nav-logo'/>
    </nav>
    )
}

export default Navbar