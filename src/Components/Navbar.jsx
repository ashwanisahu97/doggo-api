import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from "../Styles/Navbar.module.css"
const Navbar = () => {
  const handleLogout = () => { 
    // alert("clicked")
    // localStorage.setItem("isAuth",false)
    localStorage.setItem("isAuth", false)
    alert("logged out successfully")
  }
  return (
    <nav classname={ styles.nav}>
      <div> <Link to="/home"> Homepage</Link></div> 

      <div className={ styles.loginSignup}>
          <div><Link to="/"> Login</Link></div> 
       <div><Link to="/signup">Signup</Link></div> 
        <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>
  )
}

export default Navbar