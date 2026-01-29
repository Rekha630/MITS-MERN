import React, { useState } from 'react'
import Service from './Service';

const Contact = ({name}) => {
  const [name1,setName]=useState("rekha");
  const toggleName = ()=>{
    setName(name==="rekha"?"bunny":"rekha")
  }
  return (
    <div>
      <h1>Name : {name1}</h1>
      <button onClick={toggleName}>Toggle</button>
      <Service name = {name}/>
    </div>
  )
}

export default Contact