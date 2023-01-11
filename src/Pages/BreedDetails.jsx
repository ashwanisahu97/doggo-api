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
        <div style={{ display: "flex",alignItems:"center",justifyContent:"center" }}>
            <div style={{width:"400px",height:"400px",border:"2px solid red"}}>
<img width="100%" height="100%" src={ image} alt="breed random image" />
            </div>
        </div>
    //   <div>{ JSON.stringify(image)}</div>
  )
}

export default BreedDetails