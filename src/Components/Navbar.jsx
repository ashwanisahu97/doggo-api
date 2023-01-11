import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div style={{ display: "flex",gap:"10px"}}>
          <Link to="/"> <div>Homepage</div> </Link>
          <Link to="/breedDetails/:breedName"> <div>BreedDetails</div> </Link>
      </div>
  )
}

export default Navbar