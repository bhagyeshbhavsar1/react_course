import React from 'react'
import { useState } from 'react'
const App = () => {

  const [num, setNum] = useState(0);
  function inc(){
    setNum(num+1);
  }
  function dec(){
    setNum(num-1);
  }
  return (

    
    <div>
      <h1>the num is {num}</h1>
      <button onClick={inc}>increase</button>
      <button onClick={dec}>decrease</button>
    </div>
  )
}

export default App
