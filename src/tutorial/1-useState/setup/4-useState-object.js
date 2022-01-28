import React, { useState } from 'react';

const UseStateObject = () => {
  const [person,setPeople]=useState({
    name:"Mubashir",
    age:23,
    message:"My Custom Message",
  });
  const [name,setName]=useState('Mubashir');
  const [age,setAge]=useState(23);
  const [message,setMessage]=useState('My Custom Message');
  const changeMessage=()=>{
    // setPeople({...person,message:'Hello World'})
    
    setMessage('Hello World');
  }
  return <>
  <h3>{name}</h3>
  <h3>{age}</h3>
  <h3>{message}</h3>
  <button className='btn' onClick={changeMessage}>Change message</button>
  </> ;
};

export default UseStateObject;
