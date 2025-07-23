import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'



const Home = () => {
    let Navigate=useNavigate();

  return (
    <div>
      <center>
        <h1>welcome to home page</h1>
        <button onClick={()=>Navigate('/Dashboard')}>Click Here</button>
      </center>
    </div>
  )
}

export default Home
