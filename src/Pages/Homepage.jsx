import React, { useEffect, useState } from 'react'
import styles from "../Styles/Homepage.module.css"
import { Link } from 'react-router-dom';
const Homepage = () => {
    const [breeds, setBreeds] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])
    useEffect(() => {

     },[])

    const fetchData = async() => { 
        const response = await fetch("https://dog.ceo/api/breeds/list");
        console.log(response);
        const data = await response.json();
        console.log(data);
        setBreeds(data.message);
    }

  return (
      <div className={ styles.container}>
    <div className={styles.cards}>
    {
        breeds?.map((element) => { 
            return (
                <div className={styles.card} key={element}>
                    <Link to={`/breedDetails/${ element}`}> <p>{ element} </p> </Link>
                </div>
            )
        })}
</div>
</div>
  )
}

export default Homepage