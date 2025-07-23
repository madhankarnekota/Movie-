import React from 'react'
import {useParams} from 'react-router-dom'

const Dashboard = () => {
    const {name}=useParams();
  return (
    <div>
      <center>
        <h1>Hello welcome mr {name}</h1>
      </center>
    </div>
  )
}

export default Dashboard
