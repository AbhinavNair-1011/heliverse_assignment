import React, { useEffect, useRef } from 'react'
import Users from './Users'
import Search from './Search'
import Buttons from './Buttons'
const Main = () => {


  return (
    <main id="mainTag">
      <Search/>
      < Buttons  />
        <Users />
        < Buttons />
    </main>
  )
  
}

export default Main