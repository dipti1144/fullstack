import React, { useEffect } from 'react'
import axios from "axios"

const Movies = () => {

  const getmoviedata=async()=>{
    const res= await axios.get(`http://localhost:8080`);
    const data=await res.json()
    console.log(data)
  }

 useEffect(()=>{
   getmoviedata()
 },[])

  return (
    <div>Movies</div>
  )
}

export default Movies