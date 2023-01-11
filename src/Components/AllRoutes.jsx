import React from 'react'
import Homepage from '../Pages/Homepage'
import BreedDetails from '../Pages/BreedDetails'
import { Route, Routes } from 'react-router-dom'

const AllRoutes = () => {
  return (
      <Routes>
          <Route path="/" element={ <Homepage/>}></Route>
          <Route path="/breedDetails/:breed" element={ <BreedDetails/>}></Route>
    </Routes>
  )
}

export default AllRoutes