import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const handleLogout = () => { 
    // alert("clicked")
    // localStorage.setItem("isAuth",false)
    localStorage.setItem("isAuth", false)
    alert("logged out successfully")
  }
  return (
      <div style={{ display: "flex",gap:"10px"}}>
          <Link to="/"> <div>Login</div> </Link>
          <Link to="/home"> <div>Homepage</div> </Link>
          <Link to="/breedDetails/:breedName"> <div>BreedDetails</div> </Link>
      <Link to="/signup"> <div>Signup</div> </Link>
      <button onClick={handleLogout}>Logout</button>
      </div>
  )
}

export default Navbar