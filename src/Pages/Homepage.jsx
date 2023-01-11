import React, { useEffect, useState } from 'react'

const Homepage = () => {
    const [Breeds, setBreeds] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async() => { 
        const response = await fetch("https://dog.ceo/api/breeds/list");
        console.log(response);
        const data = await response.json();
        console.log(data);
        setDogs(data.message);
    }
  return (
    <div>Homepage</div>
  )
}

export default Homepage