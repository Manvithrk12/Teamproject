import React from 'react'
import './Navbar.css'
import Logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={Logo} alt="Votinglogo" className='logo' />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Result</li>
      </ul>


      <button>Register</button>


    </div>
  )
}

export default Navbar
