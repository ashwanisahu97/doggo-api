import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div style={{ display: "flex",gap:"10px"}}>
          <Link to="/"> <div>Homepage</div> </Link>
          <Link to="/breedDetails/:breedName"> <div>BreedDetails</div> </Link>
          <Link to="/login"> <div>Login</div> </Link>
          <Link to="/signup"> <div>Signup</div> </Link>
      </div>
  )
}

export default Navbar