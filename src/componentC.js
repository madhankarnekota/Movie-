import React from 'react'
import {UserContext} from './App.js'

const componentC = () => {
  return (
    <div>
      <UserContext.Consumer>
      {value=><div>{value}</div>}
      </UserContext.Consumer>
    </div>
  )
}

export default componentC
