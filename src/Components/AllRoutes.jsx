import React from 'react'
import Homepage from '../Pages/Homepage'
import BreedDetails from '../Pages/BreedDetails'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import Register from '../Pages/Register'

const AllRoutes = () => {
  return (
      <Routes>
          <Route path="/" element={ <Homepage/>}></Route>
          <Route path="/breedDetails/:breedName" element={ <BreedDetails/>}></Route>
          <Route path="/login" element={ <Login/>}></Route>
          <Route path="/signup" element={ <Register/>}></Route>
    </Routes>
  )
}

export default AllRoutes