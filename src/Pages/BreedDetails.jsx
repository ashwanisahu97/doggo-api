import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const BreedDetails = () => {
    let { breedName } = useParams();

    const [image, setImage] = useState("");

    useEffect(() => { 
        fetchData();
    },[])
    const fetchData = async() =>{ 
        const response = await fetch(`https://dog.ceo/api/breed/${breedName}/images/random`);
        console.log("response",response)
        const data = await response.json();
        console.log(data.message);
       setImage(data.message)
    }
    return (
        <div style={{display:"grid",gridTemplateColumns:repeat(5,1fr)}}>
            <img src={ image} alt="breed random image" />
        </div>
    //   <div>{ JSON.stringify(image)}</div>
  )
}

export default BreedDetails