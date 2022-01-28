import React, { useState } from 'react';

const UseStateObject = () => {
  const [person,setPeople]=useState({
    name:"Mubashir",
    age:23,
    message:"My Custom Message"
  })
  const changeMessage=()=>{
    setPeople({...person,message:'Hello World'})
  }
  return <>
  <h3>{person.name}</h3>
  <h3>{person.age}</h3>
  <h3>{person.message}</h3>
  <button className='btn' onClick={changeMessage}>CHange message</button>
  </> ;
};

export default UseStateObject;
