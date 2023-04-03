import React, { useState } from 'react'

function Array() {
  const [arr,setArr] = useState([])

  const add = () => {
    setArr([
      ...arr, {
        id: arr.length,
        value: Math.floor(Math.random() * 10) + 1
      }
    ])
  }
  return (
    <div>
      <h1 className='obj'>
        Array
      </h1>
      <button onClick={add}>
        Add a random number 
      </button>
      <ul className='arrList'>
        {arr.map(item => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  )
  
}

export default Array