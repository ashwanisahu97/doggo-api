import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const BreedDetails = () => {
    const { breed } = useParams();
    const [image, setImage] = useState();
    const fetchData = async() =>{ 
        const response = await fetch(`https://dog.ceo/api/{breed}/hound/images`);
        const data = await response.json();

    }
  return (
    <div>BreedDetails</div>
  )
}

export default BreedDetails