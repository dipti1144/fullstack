import React, { useEffect, useState } from 'react'
import axios from "axios"

const Movies = () => {
  const [data,setData]=useState([])

  const getmoviedata=async()=>{
    const res= await axios.get(`https://repulsive-pink-mackerel.cyclic.app/movie`);
     setData(res.data)
     console.log(res.data)
  }

 useEffect(()=>{
   getmoviedata()
 },[])

  return (
    <div>
     {
      data.map((el)=>(
        <div key={el._id} style={{border:"1px solid black"}} >
          <h1>{el.movie_name}</h1>
          <h2>{el.genre}</h2>
          <h3>{el.rating}</h3>
          <p>{el.director}</p>
        </div>
      ))
     }
    </div>
  )
}

export default Movies